---
layout: default
title: Resources
description: Practical TechNerd resources for access reviews, audit readiness, identity governance, and security planning.
---

# Resources

TechNerd resources are practical, no-login tools designed to help organizations think more clearly about security governance, identity, audit readiness, and risk.

<div class="collection-grid">
  {% for resource in site.resources_library %}
    <article class="collection-card">
      <p class="eyebrow">{{ resource.audience }}</p>
      <h2><a href="{{ resource.url | relative_url }}">{{ resource.title }}</a></h2>
      <p>{{ resource.description }}</p>
      {% if resource.updated %}
        <p><strong>Updated:</strong> {{ resource.updated | date: "%B %-d, %Y" }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>

## Frameworks

TechNerd frameworks provide reusable models for recurring governance, identity, audit readiness, and security program problems.

<div class="collection-grid">
  {% for framework in site.frameworks %}
    <article class="collection-card">
      <p class="eyebrow">Framework</p>
      <h2><a href="{{ framework.url | relative_url }}">{{ framework.title }}</a></h2>
      <p>{{ framework.summary }}</p>
    </article>
  {% endfor %}
</div>

{% include page-cta.html %}
