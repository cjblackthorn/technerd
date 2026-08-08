---
layout: default
title: Service Packages
description: Fixed-scope and semi-standardized TechNerd service packages for security foundations, identity governance, audit readiness, web design, and e-commerce.
---

# Service Packages

Packages are fixed-scope or semi-standardized engagements with clear deliverables. They are useful for first-time clients, smaller organizations, predictable needs, website and e-commerce launches, and teams that need budget clarity.

## Pricing Approach

Package pricing depends on scope, timeline, available documentation or content, system or platform access, stakeholder needs, integrations, and the amount of analysis, design, configuration, or implementation required. Public package pages describe the engagement shape and starting point; final pricing is confirmed after discovery.

Typical pricing language may use:

- **Starting-at pricing** for bounded assessments, website builds, and e-commerce implementations with a predictable minimum scope.
- **Scope-based quotes** when environment size, number of systems, page or product count, integrations, migration needs, or documentation depth affects effort.
- **Custom proposals** for audit readiness, enterprise governance, advanced web solutions, complex integrations, or work involving multiple stakeholders and systems.
- **Flexible payment arrangements** for qualifying small businesses and nonprofit organizations when scope, timing, and availability allow.

Third-party platform, hosting, domain, theme, application, licensing, transaction, and vendor fees are separate unless a package or proposal explicitly includes them.

<div class="collection-grid">
  {% for package in site.packages %}
    <article class="collection-card">
      <p class="eyebrow">{{ package.audience }}</p>
      <h2>{{ package.title }}</h2>
      <p>{{ package.summary }}</p>
      {% if package.timeline %}
        <p><strong>Timeline:</strong> {{ package.timeline }}</p>
      {% endif %}
      {% if package.pricing_display %}
        <p><strong>Pricing:</strong> {{ package.pricing_display }}</p>
      {% endif %}
      <a class="card-action" href="{{ package.url | relative_url }}">View package</a>
    </article>
  {% endfor %}
</div>

## Before Work Begins

Each package is confirmed with clear scope, expected deliverables, client responsibilities, timeline, access assumptions, third-party costs, change handling, and pricing approach before work starts.

{% include page-cta.html %}
