---
title: "Conduct a proactive software audit to optimize operational spend"
role: "Operations"
alsoShows: ["Analyst"]
skills: ["Spend analysis", "Billing-error detection", "Renewal planning", "Reconciliation"]
summary: "Systematically reviewed a 25-tool export to identify redundancies. Presented a phased savings plan of $18,601/year for leadership approval that excludes all peak-season tools."
brief: "Dana wants us to find at least $12,000 a year in software and subscription savings without hurting peak season. Attached is the Q3 card and invoice export for every subscription, with the seat and usage counts IT pulled last week. Can you send me a one-page recommendation by Tuesday, Oct 20, 12:00 PM ET? Flag anything that looks like a billing error. We may be owed money."
timeTaken: "90 min (time box)"
tools: ["Excel"]
aiTools: ["Claude"]
aiNote: "Claude created this practice simulation and reviewed my output. The analysis and recommendations are mine."
outcome: "Found $18,601 a year in recurring savings against a $12,000 target, plus $2,707 in refunds from three billing errors. Nothing on the peak-season freeze list was touched."
deliverables:
  - label: "Review workbook (Excel)"
    href: "/samples/vendor-spend-review/vendor-spend-review.xlsx"
  - label: "Memo, analysis and renewal calendar (PDF)"
    href: "/samples/vendor-spend-review/vendor-spend-review.pdf"
cover: "/samples/vendor-spend-review/previews/memo-to-marcus.webp"
coverAlt: "One-page memo to the COO: $18,601 a year in recurring savings plus $2,707 in refunds, a table of the top five actions with owners, dates and savings, the three billing errors to dispute, and what is not being cut"
coverWidth: 1100
coverHeight: 719
previews:
  - src: "/samples/vendor-spend-review/previews/savings-summary.webp"
    alt: "Savings summary table with twelve recommendations, each with its classification, action, calculation, annual saving, effective date and owner, totalling $18,601.32"
    caption: "Savings summary: every saving shows its calculation"
    width: 1200
    height: 800
  - src: "/samples/vendor-spend-review/previews/dispute-drafts.webp"
    alt: "Three billing dispute drafts for Notion, LinkedIn and Hootsuite, each four sentences long, with the amount to recover and the evidence to attach, totalling $2,707"
    caption: "Dispute drafts for the Controller to send, four sentences each"
    width: 1400
    height: 714
  - src: "/samples/vendor-spend-review/previews/data-issues.webp"
    alt: "Log of 12 data problems found in the export before analysis, with the rows affected and how each was treated"
    caption: "The 12 data problems logged before any analysis"
    width: 1300
    height: 687
dataSource: "Fictional scenario from a practice simulation (Kestrel Ridge Outdoor Co.), with synthetic data for every input and output. Vendor names are used only as generic examples and every price is invented. The work is mine."
date: 2026-10-17
featured: false
draft: false
---
## The details

Send Marcus (COO) one page by Tuesday, Oct 20, 12:00 PM ET.

The constraints: no changes to Shopify, Klaviyo, Gorgias, ShipStation or HubSpot before Jan 15, 2027. Seat cuts apply from the next billing date, and annual plans can only be cut at renewal. Billing disputes go to the Controller, who sends them. Vendors are not contacted directly.

## My approach

1. Profiled the export first and logged 12 data problems before analyzing anything.
2. Worked out, for each tool, Q3 spend, monthly run-rate, cost per active user and unused seats. "Active" meant a login in the 30 days to Oct 9.
3. Classified every tool as billing error, unused seats, duplicate tool, renewal risk or keep.
4. Checked each cut against the peak-season freeze, the renewal dates and the 20 temps who start on Nov 1.
5. Annualized every saving, and showed the calculation next to it.
6. Reconciled the total three ways: the recommendations, the analysis column and the classifications all give $18,601.32.

The billing errors were in the Notes column, not the numbers. Notion was still charging $120 a month after the vendor confirmed cancellation, LinkedIn charged $3,200 on a $1,600 plan, and Hootsuite charged monthly on a plan prepaid for the year. Klaviyo's September rise from $720 to $945 looked like an error but fits its list-size billing, so I flagged it to verify instead of disputing it.

## What I delivered

- **Memo to Marcus:** one page with the total, the top five actions with owners and dates, the billing errors and what I was not cutting.
- **Analysis:** one row per tool, with metrics, classification and evidence.
- **Savings summary:** recurring savings and one-off refunds kept separate, with the reconciliation.
- **Renewal calendar:** the 90 days from Oct 17 to Jan 14, with an action date before each renewal.
- **Dispute drafts:** three drafts for the Controller to send.
- **Log and QA:** a three-line log and the checklist result.

## What I'd do with more time

Check the Hootsuite statements from February to June, which were not in the export, and confirm Gusto's billed headcount matches the 85 employees. I'd also revisit Slack after the Jan 15 freeze, where moving to Teams could save up to $2,835 a year more.
