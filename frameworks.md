---
layout: default
title: Frameworks
description: TechNerd reference models for identity governance, audit readiness, evidence quality, and security governance.
---

# Frameworks

Frameworks are TechNerd reference models that explain how to approach recurring governance, identity, audit readiness, and security program problems.

<div class="collection-grid">
  {% for framework in site.frameworks %}
    <article class="collection-card">
      <p class="eyebrow">Framework</p>
      <h2>{{ framework.title }}</h2>
      <p>{{ framework.summary }}</p>
      <a class="card-action" href="{{ framework.url | relative_url }}">Review framework</a>
    </article>
  {% endfor %}
</div>

{% include page-cta.html %}
