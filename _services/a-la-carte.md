---
title: A La Carte Services
description: Focused reviews, workshops, documentation, control support, and advisory sessions.
category: Supporting Service
audience: Organizations needing targeted help without a full package or custom engagement
summary: Focused security, governance, documentation, review, and workshop services that can stand alone or supplement larger work.
problems:
  - A specific policy, control, access review, or evidence package needs support.
  - A team needs a workshop, briefing, or structured review session.
  - A larger engagement needs a focused add-on deliverable.
deliverables:
  - Policy or procedure review
  - Control narrative writing
  - Access review facilitation
  - Audit evidence review
  - Executive security briefing
  - Half-day or full-day workshop
---

A la carte services are designed for targeted needs. They can be scoped hourly, as a workshop, per document, per review, or as a small fixed-fee engagement depending on the work.

Examples include security policy review, access review design, evidence package preparation, risk register review, security metrics development, vendor review, cloud governance review, and technical writing.

## Current A La Carte Catalog

<div class="collection-grid">
  {% for item in site.a_la_carte %}
    <article class="collection-card">
      <p class="eyebrow">{{ item.category }}</p>
      <h2>{{ item.title }}</h2>
      <p>{{ item.summary }}</p>
      {% if item.delivery_format %}
        <p><strong>Format:</strong> {{ item.delivery_format }}</p>
      {% endif %}
      {% if item.pricing_display %}
        <p><strong>Pricing:</strong> {{ item.pricing_display }}</p>
      {% endif %}
      <a class="card-action" href="{{ item.url | relative_url }}">View focused service</a>
    </article>
  {% endfor %}
</div>
