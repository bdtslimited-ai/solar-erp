
import { createHash, randomBytes } from "node:crypto";

const SESSION_DURATION_DAYS = Number(
  process.env.SESSION_DURATION_DAYS || 7,
);

if (
  !Number.isInteger(SESSION_DURATION_DAYS) ||
  SESSION_DURATION_DAYS < 1 ||
  SESSION_DURATION_DAYS > 30
) {
  throw new Error(
    "SESSION_DURATION_DAYS must be an integer between 1 and 30",
  );
}

export function generateSessionToken(): string {
  return randomBytes(32).toString("hex");
}

export function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function getSessionExpiry(): Date {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + SESSION_DURATION_DAYS);
  return expiry;
}
