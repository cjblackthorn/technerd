---
layout: default
title: Service Packages
description: Fixed-scope and semi-standardized TechNerd service packages for security foundations, identity governance, and audit readiness.
---

# Service Packages

Packages are fixed-scope or semi-standardized engagements with clear deliverables. They are useful for first-time clients, smaller organizations, predictable needs, and teams that need budget clarity.

## Pricing Approach

Package pricing depends on scope, timeline, available documentation, system access, stakeholder needs, and the amount of analysis or documentation required. Public package pages describe the engagement shape; final pricing is confirmed after discovery.

Typical pricing language may use:

- **Starting-at pricing** for bounded assessments with a predictable minimum scope.
- **Scope-based quotes** when environment size, number of systems, or documentation depth affects effort.
- **Custom proposals** for audit readiness, enterprise governance, or work involving multiple stakeholders and control areas.
- **Reduced nonprofit consideration** when scope, timing, and availability allow.

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

Each package is confirmed with clear scope, expected deliverables, client responsibilities, timeline, access assumptions, and pricing approach before work starts.

{% include page-cta.html %}
