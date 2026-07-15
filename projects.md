---
layout: default
title: Projects
description: Selected anonymized and composite TechNerd project case studies across identity governance, audit readiness, and cloud governance.
---

# Projects

Selected projects demonstrate substantial bodies of work through anonymized professional case studies, composite case studies, and TechNerd reference models.

These examples are intentionally written without confidential client details. The goal is to show the kind of governance, identity, audit readiness, cloud ownership, and remediation work TechNerd can support.

<section class="proof-summary proof-summary-compact" aria-labelledby="project-proof-heading">
  <p class="eyebrow">Proof Layer</p>
  <h2 id="project-proof-heading">Experience-backed patterns</h2>
  <div class="proof-grid">
    <div class="proof-point">
      <span>01</span>
      <p>Identity governance work that connects technical access data to business ownership and remediation.</p>
    </div>
    <div class="proof-point">
      <span>02</span>
      <p>Audit readiness support that improves evidence quality, walkthrough preparation, and control clarity.</p>
    </div>
    <div class="proof-point">
      <span>03</span>
      <p>Cloud governance review patterns for ownership, access, certificates, documentation, and accountability.</p>
    </div>
  </div>
</section>

<div class="collection-grid project-library">
  {% for project in site.projects %}
    <article class="collection-card">
      <p class="eyebrow">{{ project.classification }}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>
      {% if project.focus_areas %}
        <ul class="tag-list" aria-label="{{ project.title }} focus areas">
          {% for item in project.focus_areas limit:3 %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
      {% endif %}
      {% if project.environment %}
        <p><strong>Environment:</strong> {{ project.environment }}</p>
      {% endif %}
      {% if project.proof_points %}
        <p class="detail-meta"><strong>Demonstrates:</strong> {{ project.proof_points | first }}</p>
      {% endif %}
      <a class="card-action" href="{{ project.url | relative_url }}">View case study</a>
    </article>
  {% endfor %}
</div>

{% include page-cta.html %}
