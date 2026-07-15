---
layout: default
title: Projects
description: Selected anonymized and composite TechNerd project case studies across identity governance, audit readiness, and cloud governance.
---

# Projects

Selected projects demonstrate substantial bodies of work through anonymized professional case studies, composite case studies, and TechNerd reference models.

<div class="collection-grid">
  {% for project in site.projects %}
    <article class="collection-card">
      <p class="eyebrow">{{ project.classification }}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>
      {% if project.environment %}
        <p><strong>Environment:</strong> {{ project.environment }}</p>
      {% endif %}
      <a class="card-action" href="{{ project.url | relative_url }}">View case study</a>
    </article>
  {% endfor %}
</div>

{% include page-cta.html %}
