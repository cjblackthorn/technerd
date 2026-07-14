---
layout: default
title: Services
description: Cybersecurity governance, identity governance, audit readiness, strategic advisory, and right-sized security services from TechNerd Consulting.
---

# Services

TechNerd Consulting provides enterprise-informed cybersecurity governance, identity, risk, audit readiness, and practical security consulting.

The service hierarchy is intentional: enterprise security and governance are the primary body of work; small-business and nonprofit services are a right-sized secondary path informed by that enterprise experience.

## Service Paths

<div class="collection-grid">
  {% for item in site.data.service_groups %}
    <article class="collection-card">
      <p class="eyebrow">{{ item.priority }}</p>
      <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p>{{ item.summary }}</p>
    </article>
  {% endfor %}
</div>

## Initial Packages

<div class="collection-grid">
  {% for package in site.packages %}
    <article class="collection-card">
      <p class="eyebrow">{{ package.audience }}</p>
      <h2><a href="{{ package.url | relative_url }}">{{ package.title }}</a></h2>
      <p>{{ package.summary }}</p>
      {% if package.pricing_display %}
        <p><strong>Pricing:</strong> {{ package.pricing_display }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>

## How Services Are Scoped

Most work starts with discovery. Pricing and deliverables depend on scope, urgency, system access, technical complexity, risk, stakeholders, and the level of documentation or implementation needed.

Strategic consulting is generally proposal-based. Packages can use fixed-scope, starting-at, range, or quote-based pricing without changing the page structure.

{% include page-cta.html %}
