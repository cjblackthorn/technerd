---
layout: default
title: Insights
description: TechNerd insights on identity governance, GRC, audit readiness, controls, risk, and security leadership.
---

# Insights

Long-form educational content on identity governance, GRC, audit readiness, controls, risk management, cloud governance, and security program development.

<div class="collection-grid">
  {% assign sorted_insights = site.insights | sort: "date" | reverse %}
  {% for insight in sorted_insights %}
    <article class="collection-card">
      <p class="eyebrow">{{ insight.category }}</p>
      <h2>{{ insight.title }}</h2>
      <p>{{ insight.summary }}</p>
      <p class="detail-meta">
        {% if insight.date %}{{ insight.date | date: "%B %-d, %Y" }}{% endif %}
        {% if insight.reading_time %} · {{ insight.reading_time }}{% endif %}
      </p>
      <a class="card-action" href="{{ insight.url | relative_url }}">Read insight</a>
    </article>
  {% endfor %}
</div>

{% include page-cta.html %}
