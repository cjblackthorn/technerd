---
title: Identity Governance Is a GRC Function—Not Just an IT Function
description: Why identity governance is a GRC-enabling business function that connects access, ownership, lifecycle controls, risk, compliance, and audit evidence.
category: Identity Governance
tags:
  - identity governance
  - IAM
  - GRC
  - access management
  - audit readiness
  - security governance
  - risk management
date: 2026-07-15
last_updated: 2026-07-15
reading_time: 16 min read
summary: Identity governance is where business decisions about people, responsibilities, risk, and accountability become enforceable digital controls. Technology provisions access; governance keeps it aligned with business reality.
author: Corrine Blackthorn
related_services:
  - title: Enterprise Security & Governance
    url: /services/enterprise-security-governance/
  - title: Strategic Advisory
    url: /services/strategic-advisory/
related_projects:
  - title: Enterprise External Active Directory Governance & Cleanup
    url: /projects/enterprise-external-active-directory-governance-cleanup/
  - title: IAM Audit Support
    url: /projects/iam-audit-support/
related_packages:
  - title: Identity & Access Health Check
    url: /services/packages/identity-access-health-check/
related_resources:
  - title: Access Review Checklist
    url: /resources/access-review-checklist/
related_insights:
  - title: Evidence Is Part of the Control
    url: /insights/evidence-is-part-of-the-control/
  - title: Seven Reasons Access Reviews Fail Audits
    url: /insights/seven-reasons-access-reviews-fail-audits/
---

When people hear *identity management*, they often think of usernames, passwords, account creation, or the help desk resetting someone’s access. Even within information technology, identity can be treated mainly as an operational discipline: create the account, assign the groups, connect the application, and close the ticket.

Those activities matter, but they are only part of the picture.

Identity and access management is commonly understood as a combination of business processes, policies, and technologies used to manage digital identities and access.[^1] Identity governance is the part that asks whether those processes are producing the right outcomes:

- Does this person still need this access?
- Was it approved by someone with the authority and context to approve it?
- Is the level of access proportionate to the business need?
- Who owns the decision?
- What happens when the person changes roles or leaves?
- Can the organization demonstrate that the control worked?

Those are governance, risk, and compliance questions.

Identity governance does not need to report organizationally through a GRC department to serve a GRC function. It may sit within IAM, information security, IT, or a broader risk organization. What matters is that identity decisions are governed through clear accountability, risk-based controls, repeatable processes, and defensible evidence.

> **Provisioning creates access. Governance ensures that access remains appropriate.**

## More Than a Username and Password

Ask someone what an organizational identity is, and the answer may be:

- An Active Directory account
- A Microsoft Entra ID object
- A login
- An email address
- A username and password

None of those answers is entirely wrong. They are simply incomplete.

An account is one technical representation of an identity. A useful way to think about a human organizational identity is as **the digital representation of that person’s relationship with the organization**.

That representation can include:

- Employment or engagement status
- Worker type
- Department
- Manager
- Job function
- Application accounts
- Group memberships
- Roles and entitlements
- Authentication methods
- Privileged access
- Licenses
- Approval relationships
- Ownership responsibilities

The relationship exists before the first login.

A person accepts a job or begins a contract. Human Resources, procurement, a sponsor, or another business function records the relationship. A manager defines responsibilities. Business and application owners determine what work the person must perform. Identity systems then translate those decisions into accounts, attributes, access assignments, licenses, credentials, and workflows.

Technology is implementing business decisions.

That distinction changes how identity should be managed. If identity were only a collection of user accounts, it could remain primarily an IT operations concern. Because identity represents a changing business relationship, it requires governance.

This article focuses mainly on human identities, but the same governance questions extend to non-human identities such as service accounts, workloads, devices, APIs, bots, and automation identities. These identities may not have an employee lifecycle, yet they still require ownership, defined purpose, appropriate privilege, review, and retirement.

## The Identity Lifecycle Is Really a Relationship Lifecycle

Microsoft and other identity-governance platforms commonly describe the workforce lifecycle in three phases: joiner, mover, and leaver.[^2] The labels are simple, but the reality behind them is not.

### Joiner

A person enters the scope of needing organizational access.

The organization must determine:

- Who the person is
- What kind of relationship they have with the organization
- When that relationship begins
- Who sponsors or manages them
- What baseline access they need
- Whether any access requires additional review

### Mover

The person’s relationship changes.

They may:

- Transfer departments
- Change managers
- Receive a promotion
- Join a temporary project
- Take a leave of absence
- Assume financial approval authority
- Receive privileged access
- Lose responsibilities they previously held

A mover event should consider both sides of the change: what must be added and what may no longer be appropriate.

### Leaver

The person leaves the scope of needing access.

That may involve termination, retirement, contract completion, vendor offboarding, or the end of a partnership. The objective is timely revocation of required access—not necessarily immediate deletion of every record. Accounts or data may need to be disabled, transferred, archived, or retained for legal, operational, or records-management reasons.

A leaver process is complete when required access has been revoked, failures have been remediated, and completion can be verified—not merely when an automated workflow has run.

The lifecycle is rarely a clean, linear path. People return. Contractors receive extensions. Employees hold multiple roles. Access may be temporary, inherited, manually assigned, or maintained in systems that are not connected to the central identity platform.

That complexity creates the central identity-governance problem:

> **People and organizations change continuously, while digital access often does not.**

Someone who transferred departments two years ago may still retain permissions from the previous role. A contractor may remain active in a disconnected application after the engagement ends. A privileged account created during an urgent project may persist because its purpose, owner, or expiration was never documented.

The technology may be operating exactly as configured. The governance has failed to keep the digital identity aligned with the current relationship.

## Governance Begins Where Technology Ends

Identity technologies can:

- Create and disable accounts
- Assign licenses
- Provision and revoke application access
- Enforce multifactor authentication
- Route approval requests
- Launch access reviews
- Detect inactivity
- Reconcile accounts
- Generate reports
- Record decisions and timestamps

What they cannot independently determine is whether access is appropriate.

A system may know that someone works in Finance and that people with similar attributes usually receive access to a financial application. That information can support a decision. It does not replace one.

The system cannot independently decide:

- Whether the person genuinely needs the access
- Whether it creates a segregation-of-duties conflict
- Whether temporary privilege is justified
- Whether the access exposes regulated or highly sensitive data
- Whether an exception should be accepted
- Who should be accountable if the access is misused
- Whether the risk is within the organization’s tolerance

Technology can enforce a rule, but the organization must define the rule.

It can route an approval, but someone must have the authority and context to approve.

It can display an entitlement, but someone must understand what that entitlement permits.

It can automate a bad process just as efficiently as a good one.

If job data is inaccurate, ownership is unclear, or role design is weak, automation can embed those problems at scale. A provisioning workflow may execute perfectly while granting inappropriate access. An access review may reach 100 percent completion while reviewers approve permissions they do not understand. A termination workflow may disable the main directory account while leaving access active in a disconnected application.

> **Automation supports governance. It does not substitute for it.**

## Identity Governance Is a Shared Responsibility

Identity governance cannot be performed effectively by the IAM team alone. Different groups hold different parts of the organizational picture.

### Human Resources and Other Authoritative Sources

Human Resources is often the authoritative source for core workforce attributes such as employment status, start and end dates, department, manager, and worker type.

It is not always the source for every identity.

Contractors, vendors, partners, volunteers, students, and other external populations may be governed through procurement, vendor management, a sponsorship process, or another business system. A mature program defines which source is authoritative for each population and how missing, delayed, or conflicting information is handled.

### Managers

Managers usually understand what work a person performs and whether their responsibilities have changed.

They may not understand the technical meaning of every role or entitlement. Labels such as `AP_PROD_04` or `APP_SUPPORT_ADMIN` do not provide enough context for a meaningful approval. Managers need understandable descriptions, relevant risk information, and a way to escalate uncertain decisions.

### Application Owners

Application owners should understand:

- What the application does
- Which business processes it supports
- What data it contains
- What its roles and entitlements permit
- Which access combinations create risk
- Who may approve access
- How access should be reviewed
- What happens when a user changes roles or leaves

Technical ownership and business ownership are not interchangeable. A technical owner may maintain the application and its integrations. A business owner is accountable for its business use, access model, and associated risk.

### Information Security and GRC

Security and GRC functions help define the control environment around identity. They may establish or advise on requirements for:

- Least privilege
- Privileged access
- Segregation of duties
- Access-review frequency
- Termination timeframes
- Evidence retention
- Exception management
- Risk acceptance
- Control testing
- Remediation tracking

### IAM and IT Teams

IAM and IT teams translate governance requirements into technical processes. They connect authoritative sources, configure provisioning, integrate applications, support access reviews, reconcile accounts, monitor failures, and produce operational evidence.

They enable the decision process. They should not become the default owner of every business-access decision simply because they control the technical mechanism.

Many parties may participate, but each important decision and control should still have one clearly accountable owner. CISA describes cybersecurity governance in terms of accountability frameworks, decision-making hierarchies, defined risks, mitigation strategies, and oversight processes.[^3] Identity governance is one place where those concepts become operational.

## Why Identity Governance Is a GRC-Enabling Function

Governance, risk, and compliance is often associated with policies, control frameworks, risk registers, regulations, and audits. Identity governance directly supports each of those areas.

### Governance: Who Has Authority and Accountability?

Governance establishes who may make access decisions and how those decisions must be made.

It defines:

- Who owns an application
- Who approves access
- Who may authorize privileged permissions
- Who reviews existing access
- Who accepts exceptions
- Who remediates failures
- Who confirms that a control operated as intended

Without governance, access may still be granted, but the decisions become inconsistent, informal, and difficult to defend.

An employee might receive access because a coworker messaged the service desk. The access may even be necessary. But if the organization cannot establish who authorized it, whether that person had the authority to do so, or how the decision was recorded, the process is not well governed.

### Risk: How Much Oversight Does This Access Require?

Not all access creates the same risk.

Access to a public scheduling tool is not equivalent to access that can:

- View payroll data
- Change production infrastructure
- Approve financial transactions
- Export customer records
- Manage identities
- Alter audit logs
- Create new privileged users

Risk-based identity governance considers factors such as:

- Data sensitivity
- Privilege level
- Business criticality
- Regulatory exposure
- Fraud potential
- Operational dependency
- External access
- Duration
- Concentration of permissions
- Potential impact of compromise or misuse

A low-risk entitlement may require a straightforward manager approval. A highly privileged role may require an application-owner decision, security review, stronger authentication, time limitation, enhanced logging, and more frequent recertification.

NIST’s Cybersecurity Framework 2.0 treats identity management, authentication, and access control as cybersecurity outcomes that should be managed in proportion to assessed risk. It also emphasizes defined roles, responsibilities, authorities, and organization-wide risk governance.[^4]

### Compliance: Can the Organization Demonstrate Control?

Legal, regulatory, contractual, and internal requirements vary, but many share similar access-control expectations:

- Access is limited to authorized users.
- Permissions reflect legitimate business need.
- Privileged access receives additional oversight.
- Access is periodically reviewed.
- Access is revoked when no longer required.
- Exceptions are documented.
- Control activities can be demonstrated.

Identity governance turns those expectations into operating processes.

A policy may require least privilege. Identity governance translates that principle into access models, approvals, reviews, expiration, and revocation.

A control may require periodic access certification. Identity governance defines the review population, appropriate reviewers, decision criteria, remediation workflow, and evidence.

A termination requirement may specify timely revocation. Identity governance connects the triggering business event to downstream systems, detects failures, escalates unresolved items, and verifies completion.

Microsoft explicitly describes access reviews as a way to manage group and application access in support of governance, risk management, and compliance initiatives.[^5]

## A Control Is More Than a Completed Activity

A green dashboard does not automatically prove that a control worked.

Consider an access review. A campaign may show 100 percent completion, but that number alone does not demonstrate that:

- The population was complete
- The correct reviewers were selected
- Reviewers understood the access
- Decisions were based on meaningful criteria
- Rejected access was removed
- Overdue items were escalated
- Exceptions were documented
- Evidence was retained

A control combines:

- A defined objective
- Accountable ownership
- A documented or repeatable process
- Appropriate scope and frequency
- Expected outcomes
- A way to verify that it operated as intended

Evidence is part of that verification. It should allow someone who was not involved in the activity to understand what happened, when, by whom, over what population, with what result, and how exceptions were handled.

Microsoft’s lifecycle-governance deployment guidance frames the goal in similar terms: organizations should be able to determine who should have access, whether control is effective, whether auditors can verify it, and whether access is removed in a timely manner.[^6]

> **If access cannot be explained, owned, reviewed, and demonstrated, it is not truly governed.**

## Where Identity Governance Programs Commonly Break Down

### 1. IAM Is Treated as an IT-Only Function

Technical teams become responsible for decisions they are not positioned to make.

An IAM engineer may know how to provision a financial role. That does not mean they know whether the person should be able to create vendors, approve payments, or access payroll.

IT should understand how access is implemented. The business should understand why it is needed and what risk it creates.

### 2. Access Reviews Become Rubber-Stamp Exercises

Reviewers receive long lists of cryptic entitlements, little context, and a deadline. Approving everything becomes the easiest path.

A meaningful review should provide enough information to answer:

- Who is the user?
- What does the access permit?
- Why was it granted?
- Is it privileged or sensitive?
- Does the person still perform the relevant work?
- What happens if it is rejected?

A completed review is not necessarily an effective review.

### 3. Application Ownership Is Unclear

The person who implemented the application may have left. A support team may maintain it without authority to accept its business risk. The department that uses it may never have formally accepted ownership.

The result is predictable:

- Inconsistent approvals
- Weak entitlement descriptions
- Misrouted access reviews
- Unresolved audit questions
- Lingering exceptions
- Obsolete access

Ownership should be documented, understood, periodically confirmed, and supported by an escalation path.

### 4. Access Is Added but Not Reconsidered

Each access grant may have been appropriate when approved. Problems arise when old access remains after the business need ends.

A transfer should trigger both addition and removal decisions. Temporary access should have an expiration. Privileged assignments should receive additional scrutiny. Emergency access should not become permanent by neglect.

Over time, unmanaged accumulation becomes privilege creep: the identity reflects every role a person has ever held rather than the role they perform today.

### 5. Termination Is Assumed to Be Fully Automated

A primary directory account may be disabled while access persists in:

- SaaS applications
- Local accounts
- Legacy platforms
- External partner systems
- Privileged accounts
- Tokens and keys
- Development environments
- Shared or secondary accounts

Mature termination controls include reconciliation, failure monitoring, escalation, and verification.

### 6. External Identities Lack a Defined Lifecycle

Contractors, consultants, vendors, partners, and guest users may fall outside normal employee processes.

They require:

- A sponsor
- A documented business need
- Appropriate scope
- An expiration or review point
- Periodic validation
- Extension approval
- Offboarding

Microsoft recommends reviewing and removing external identities when they are no longer needed, reflecting the broader principle that external access should not continue indefinitely without validation.[^7]

### 7. The Program Measures Activity Instead of Outcomes

Operational metrics matter, but they do not necessarily show risk reduction.

“Ten thousand access requests processed” measures workload.

Better governance questions include:

- What percentage of required terminations completed on time?
- How many failed revocations remain unresolved?
- What percentage of applications have confirmed owners?
- How old are outstanding access-review revocations?
- How many external identities lack active sponsors?
- What percentage of temporary access expired automatically?
- Which identity-control exceptions recur?

The purpose of metrics is not to make the dashboard look active. It is to support decisions and improvement.

## Building a Mature Identity Governance Program

A mature program is not defined by a particular product. It is defined by the organization’s ability to make, implement, review, explain, and improve identity-related decisions.

### Establish Clear Ownership

Define accountability for:

- Identity data
- Applications
- Roles and entitlements
- Access approvals
- Access reviews
- Privileged access
- External identities
- Exceptions
- Remediation
- Evidence

Ownership should be more than a name in a spreadsheet. The owner must understand the responsibility and have the authority to act.

### Define Authoritative Sources

For each identity population, establish:

- Which source is authoritative
- Which attributes are required
- How quickly changes must be communicated
- How errors are corrected
- How conflicting data is resolved
- How downstream systems are reconciled

Automation is only as reliable as the data that drives it.

### Govern the Entire Lifecycle

Design for:

- Pre-hire or pre-engagement needs
- Onboarding
- Role changes
- Transfers
- Temporary assignments
- Leaves
- Privileged elevation
- Contract extensions
- Termination
- Post-termination verification
- Retention and archival requirements

A lifecycle event should evaluate what must be removed as carefully as what must be added.

### Apply Risk-Based Controls

Use stronger controls where the impact is greater.

Higher-risk access may justify:

- Additional approvals
- Independent review
- Time limitation
- Stronger authentication
- Enhanced monitoring
- More frequent recertification
- Segregation-of-duties analysis
- Documented justification

### Make Access Reviews Meaningful

Provide reviewers with understandable entitlement descriptions, user context, risk indicators, and clear instructions.

Track the outcome after the click:

- Was rejected access removed?
- Were exceptions recorded?
- Were overdue decisions escalated?
- Did recurring issues reveal a broader control weakness?

### Manage Exceptions Deliberately

Exceptions are sometimes necessary. They should not be invisible or indefinite.

A strong exception record includes:

- Business justification
- Risk description
- Accountable owner
- Compensating controls
- Approval
- Start and expiration dates
- Review requirements
- Remediation plan, when applicable

Repeated exceptions may indicate that the standard, technology, or business process needs to change.

### Build Evidence Into the Process

Capture evidence as the process operates:

- Requestor
- Approver
- Business justification
- Decision
- Timestamp
- Access granted or revoked
- Exception
- Escalation
- Completion status

Do not wait until audit season to reconstruct the story.

### Reconcile Expected and Actual Access

Compare what should exist with what actually exists.

Reconciliation can identify:

- Orphaned accounts
- Duplicate accounts
- Failed provisioning
- Failed deprovisioning
- Unlinked privileged access
- Dormant identities
- Unauthorized assignments
- Incorrect attributes

A control that reports only successful transactions may hide the failures that matter most.

### Measure Outcomes and Improve Continuously

Metrics should lead to action.

Review trends, recurring failures, ownership gaps, manual dependencies, review quality, and application coverage. Then use that information to improve the program.

Identity governance is not a one-time implementation. Organizations, applications, risks, and obligations continue to change.

## Identity Governance Is Business Governance

Identity systems are visible because they perform technical actions:

- Accounts are created.
- Groups are assigned.
- Applications are connected.
- Workflows run.
- Reports are produced.

Beneath every action is a business decision:

- Who should have access?
- Who may approve it?
- How long should it remain?
- What risk does it create?
- Who reviews it?
- What happens when it fails?
- What evidence proves the process worked?

Those are governance questions.

Identity governance is therefore not merely an IT operation or an accessory to GRC. It is a GRC-enabling business function: one of the primary ways an organization turns policy, accountability, and risk decisions into enforceable and testable digital controls.

An identity is more than an account. It is a digital representation of a relationship—with a person, contractor, vendor, partner, service, or system—and that representation must remain aligned with reality.

Technology can create an identity in seconds. It can automate access changes, launch certifications, and disable accounts at remarkable speed.

It cannot decide what is appropriate, who is accountable, or what risk the organization is willing to accept.

That responsibility belongs to the organization.

> **Technology provisions access. Governance keeps it aligned with business reality.**

---

## Key Takeaways

- Identity governance is a GRC-enabling business function, regardless of where the IAM team reports organizationally.
- An organizational identity represents a relationship, not merely a username or account.
- Identity technology implements decisions; it does not own the underlying business risk.
- Joiner, mover, and leaver processes must account for additions, removals, exceptions, and verification.
- Shared responsibility still requires clearly assigned accountability.
- Access reviews must be meaningful, not merely complete.
- Termination controls require reconciliation and verification, especially across disconnected systems.
- External identities need sponsorship, review, expiration, and offboarding.
- Evidence should be designed into controls from the beginning.
- Mature programs use risk-based controls, outcome-focused metrics, and continuous improvement.

---

## Further Reading

[^1]: Cybersecurity and Infrastructure Security Agency, “CISA and NSA Release Enduring Security Framework Guidance on Identity and Access Management.” https://www.cisa.gov/news-events/alerts/2023/03/21/cisa-and-nsa-release-enduring-security-framework-guidance-identity-and-access-management

[^2]: Microsoft, “What Are Lifecycle Workflows?” Microsoft Entra ID Governance. https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows

[^3]: Cybersecurity and Infrastructure Security Agency, “Cybersecurity Governance.” https://www.cisa.gov/topics/cybersecurity-best-practices/cybersecurity-governance

[^4]: National Institute of Standards and Technology, “The NIST Cybersecurity Framework (CSF) 2.0.” https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20

[^5]: Microsoft, “What Are Access Reviews?” Microsoft Entra ID Governance. https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview

[^6]: Microsoft, “Plan a Lifecycle Workflow Deployment.” Microsoft Entra ID Governance. https://learn.microsoft.com/en-us/entra/id-governance/lifecycle-workflows-deployment

[^7]: Microsoft, “Use Microsoft Entra ID Governance to Review and Remove External Users Who No Longer Have Resource Access.” https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-external-users
