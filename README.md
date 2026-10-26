# Solar ERP & CRM

**A Cloud-Based, Multi-Tenant ERP and Customer Relationship Management Platform for Solar Businesses**

Solar ERP & CRM is a planned SaaS platform designed to streamline solar business operations—from lead management and customer relationships to site surveys, quotations, sales orders, project execution, inventory, finance, and after-sales service.

The platform aims to provide solar companies with a centralized workspace to manage customers, automate workflows, improve operational visibility, and support business growth.

> **Project Status:** Planning & Architecture  
> **Version:** 1.1  
> **Target Market:** India-first, with support planned for residential, commercial, and industrial solar businesses.

---

## Table of Contents

- [Overview](#overview)
- [Project Objectives](#project-objectives)
- [Key Features](#key-features)
- [Planned Technology Stack](#planned-technology-stack)
- [System Architecture](#system-architecture)
- [User Roles](#user-roles)
- [Development Roadmap](#development-roadmap)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Security and Data Protection](#security-and-data-protection)
- [Documentation](#documentation)
- [Current Status](#current-status)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Solar businesses often manage leads, customer information, site surveys, quotations, installation activities, and service requests across disconnected tools and spreadsheets.

Solar ERP & CRM aims to bring these workflows together in one integrated platform.

The system is being designed around a **multi-tenant SaaS architecture**, allowing multiple solar companies to use the same application while keeping their business data isolated.

The initial release will focus on CRM and sales workflows, with operational and financial modules introduced incrementally.

## Project Objectives

- Centralize customer and lead information.
- Improve lead tracking, assignments, and follow-up management.
- Simplify site surveys and customer-site documentation.
- Standardize quotation creation, approvals, revisions, and PDF generation.
- Connect accepted quotations with sales orders.
- Provide role-based access and company-level data isolation.
- Establish a scalable foundation for solar project management.
- Support future procurement, inventory, finance, and service workflows.
- Integrate external communication and productivity tools.

## Key Features

### 1. CRM and Lead Management
- Lead creation, assignment, and status tracking.
- Follow-up scheduling and activity history.
- Lead source management.
- Search and duplicate detection.
- Lead conversion into customer records.
- Sales pipeline dashboard.

### 2. Customer Management
- Centralized customer profiles.
- Multiple contacts per customer.
- Multiple solar sites per customer.
- Customer interaction history.
- Document and site information management.

### 3. Site Survey Management
- Basic site survey forms and checklists.
- Site measurements and technical notes.
- Photo and document attachments.
- Survey status and assignment tracking.

### 4. Product Catalog and Quotations
- Product and SKU management.
- Configurable pricing and tax metadata.
- Quotation creation and revision history.
- Discount and approval workflows.
- PDF quotation generation.
- Quotation status and validity tracking.

### 5. Sales Order Management
- Convert accepted quotations into sales orders.
- Maintain order line items and customer references.
- Track basic sales order status.
- Preserve quotation-to-order traceability.

### 6. Solar Project Operations — Planned
- Project and milestone tracking.
- Procurement and supplier management.
- Inventory and stock movement.
- Installation scheduling.
- Quality checks and handover documentation.
- Net-metering and approval workflow tracking where applicable.

### 7. Finance and Service — Planned
- Payment and collection tracking.
- Expense management.
- Configurable tax-related records and reports.
- Service tickets and technician assignments.
- Warranty and Annual Maintenance Contract (AMC) management.

### 8. Customer Portal
- Secure customer login.
- View shared quotations and status updates.
- Access authorized documents.
- View customer-specific records.

### 9. SaaS Administration — Planned
- Multi-company tenant management.
- Company memberships and role-based permissions.
- Plan and feature entitlement foundations.
- Subscription billing and usage management in a later phase.

---

## Planned Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Language | TypeScript |
| Backend | Node.js |
| API Framework | Express.js |
| Database | MySQL |
| ORM | Prisma |
| Validation | Zod |
| API Documentation | OpenAPI / Swagger |
| Authentication | Server-managed sessions |
| Document Storage | Private object storage |
| PDF Generation | Server-side PDF generation |
| Testing | Unit, integration, API, and end-to-end tests |
| Deployment | Cloud hosting; provider to be finalized |

*The technology stack is proposed and subject to technical review.*

## System Architecture

The application is planned as a **modular monolith**. This approach keeps development and deployment manageable while maintaining clear boundaries between business modules.

```text
                    Users
                      |
             React Web Application
                      |
                 HTTPS / API
                      |
             Express.js Backend
                      |
        Authentication & Authorization
                      |
              Domain Modules
                      |
    -------------------------------------
    |          |          |             |
   CRM      Customers   Quotations     Orders
    |          |          |             |
    -------------------------------------
                      |
                 MySQL Database
                      |
           Private Object Storage
                      |
             Integration Services
       Email | WhatsApp | Google Drive
             Maps | Calendar | PDF
```

The backend will enforce authentication, permissions, tenant ownership, input validation, and business rules.

## User Roles

| Role | Responsibilities |
|---|---|
| Platform Owner | Manage platform-level operations and tenant administration |
| Company Admin | Configure company settings, users, and permissions |
| Sales Manager | Manage the sales pipeline, assign leads, and review quotations |
| Sales Executive | Manage leads, customer records, follow-ups, and quotations |
| Surveyor / Designer | Record site surveys, measurements, and technical information |
| Purchase / Store User | Manage procurement and inventory in a future release |
| Project Manager / Installer | Manage project milestones and installation activities in a future release |
| Accounts User | Manage finance-related workflows in a future release |
| Service Technician | Handle service tickets, warranties, and maintenance in a future release |
| Customer | Access permitted quotations, documents, and status information |

## Development Roadmap

Development will follow an incremental release strategy.

| Phase | Scope | Status |
|---|---|---|
| Phase 0 | Requirements, documentation, and architecture | Planning |
| Phase 1 | Authentication, tenants, CRM, customers, quotations, and sales orders | Planned |
| Phase 2 | Solar sizing, project management, procurement, and inventory | Planned |
| Phase 3 | Finance, tax-configured workflows, service, warranty, and AMC | Planned |
| Phase 4 | SaaS subscriptions, advanced automation, and expanded integrations | Planned |

The first release will prioritize a secure foundation and the complete lead-to-quotation-to-order workflow.

## Project Structure

The following structure is proposed for the implementation:

```text
solar-erp/
├── apps/
│   ├── web/                 # React frontend
│   ├── api/                 # Express.js backend
│   └── worker/              # Background jobs
├── packages/
│   ├── shared/              # Shared types and schemas
│   └── config/              # Shared development configuration
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── docs/
│   ├── BRD.md
│   ├── SRS.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── API.md
│   └── SECURITY.md
├── tests/
│   ├── integration/
│   └── e2e/
├── infra/
│   └── deployment/
├── .env.example
├── .gitignore
└── README.md
```

This is a planned structure; directories and files will be added as implementation progresses.

## Getting Started

**The application is currently in the planning and architecture stage.** Installation instructions will be added after the initial source code and development configuration are available.

### Prerequisites

The planned development environment will require:

- Node.js — supported LTS version to be finalized.
- npm or another selected package manager.
- MySQL.
- Git.
- A code editor such as Visual Studio Code.

### Planned Setup Workflow

Once the initial implementation is available:

1. Clone the repository.
2. Install project dependencies.
3. Configure environment variables using `.env.example`.
4. Create a development MySQL database.
5. Apply database migrations.
6. Start the backend API, background worker, and frontend.
7. Run the automated test suite.

Exact commands will be documented after the project configuration is established.

## Security and Data Protection

Security is a core architectural requirement.

Planned controls include:

- Multi-tenant data isolation enforced on the server.
- Role-based access control.
- Secure, server-managed authentication sessions.
- HTTPS and protected session cookies.
- CSRF protection for relevant browser requests.
- Server-side input validation.
- Private document storage and authorized downloads.
- Audit logging for sensitive business actions.
- Environment-based secret management.
- Database backups and tested recovery procedures.
- Automated tests for cross-tenant access and privilege escalation.

Production deployment will require a security review and validation of applicable privacy, tax, and regulatory requirements.

## Documentation

Project documentation will cover:

- **BRD:** Business Requirements Document.
- **SRS:** Software Requirements Specification.
- **Architecture:** System components and architectural decisions.
- **Database Design:** Entity relationships, schema, and tenant ownership.
- **API Specification:** Endpoint contracts and error conventions.
- **Security:** Authentication, authorization, and threat model.
- **Testing:** Test strategy and acceptance criteria.
- **Deployment:** Environment configuration and operational procedures.

The full project planning blueprint is maintained separately and will serve as the basis for these detailed documents.

## Current Status

The project is currently focused on requirements definition, architecture, database planning, and Release 1 scope.

**Completed at the planning level:**
- Product vision and target business segments.
- Proposed technology stack and architecture.
- Initial module breakdown and development roadmap.
- Requirements baseline and security principles.
- Initial database entity and API inventory.

**Still required before the first production release:**
- Final approval of Release 1 requirements.
- Detailed ER diagram and database schema.
- UI wireframes and API contracts.
- Implementation and automated test coverage.
- Cloud provider selection and deployment setup.
- User acceptance testing and security review.

Features described as planned are not represented as implemented or production-ready.

## Future Enhancements

- Advanced solar system sizing and engineering calculations.
- Project scheduling and installation tracking.
- Procurement and inventory management.
- Financial workflows and accounting integrations.
- Warranty and AMC automation.
- Customer notifications and workflow automation.
- SaaS subscription and billing management.
- Advanced analytics and business reporting.
- Additional integrations based on customer requirements.

## Contributing

Contributions, suggestions, and architecture feedback are welcome.

Before submitting a contribution:

1. Review the existing requirements and project scope.
2. Describe the problem and proposed solution.
3. Include tests for new functionality and bug fixes.
4. Ensure tenant isolation and authorization are preserved.
5. Update relevant documentation.
6. Avoid committing secrets, credentials, or real customer data.

For significant architectural changes, document the decision and its trade-offs before implementation.

## License

A license has not yet been selected. Until a license is added to the repository, all rights remain reserved by the applicable copyright holder. Do not assume that the code is open source or available for redistribution.

---

**Solar ERP & CRM — Building a connected operational platform for the solar industry.**
