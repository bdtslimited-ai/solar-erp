
import type { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { hashSessionToken } from "../utils/auth.js";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        tenantId: string;
        role: "OWNER" | "ADMIN" | "SALES" | "STAFF";
        sessionId: string;
      };
    }
  }
}

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = req.cookies?.session;

    if (typeof token !== "string" || !token) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    const tokenHash = hashSessionToken(token);

    const session = await prisma.session.findUnique({
      where: { tokenHash },
      include: {
        user: {
          select: {
            id: true,
            tenantId: true,
            role: true,
            isActive: true,
          },
        },
      },
    });

    if (
      !session ||
      session.expiresAt <= new Date() ||
      !session.user.isActive
    ) {
      res.clearCookie("session", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      res.status(401).json({
        success: false,
        message: "Invalid or expired session",
      });
      return;
    }

    req.auth = {
      userId: session.user.id,
      tenantId: session.user.tenantId,
      role: session.user.role,
      sessionId: session.id,
    };

    next();
  } catch (error) {
    next(error);
  }
}
