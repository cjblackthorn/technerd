---
layout: default
title: Service Packages
description: Fixed-scope and semi-standardized TechNerd service packages for security foundations, identity governance, and audit readiness.
---

# Service Packages

Packages are fixed-scope or semi-standardized engagements with clear deliverables. They are useful for first-time clients, smaller organizations, predictable needs, and teams that need budget clarity.

<div class="collection-grid">
  {% for package in site.packages %}
    <article class="collection-card">
      <p class="eyebrow">{{ package.audience }}</p>
      <h2><a href="{{ package.url | relative_url }}">{{ package.title }}</a></h2>
      <p>{{ package.summary }}</p>
      {% if package.timeline %}
        <p><strong>Timeline:</strong> {{ package.timeline }}</p>
      {% endif %}
      {% if package.pricing_display %}
        <p><strong>Pricing:</strong> {{ package.pricing_display }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>

{% include page-cta.html %}
