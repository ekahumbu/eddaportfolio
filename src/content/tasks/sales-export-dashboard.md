---
title: "Clean a messy sales export and build a one-page dashboard"
role: "Analyst"
alsoShows: []
skills: ["Data cleaning", "Excel and Power Query", "KPI reporting", "Dashboard design"]
summary: "A messy weekly sales export cleaned in 11 logged steps, then shown as a one-page dashboard with a covering email."
brief: "I need one page on Q3 for Monday's leadership meeting. Four things: are we on budget by channel, are DTC returns getting worse, is on-time shipping holding up before peak, and which channel is carrying us. Tom's export is messy, so clean it first and tell me what you fixed. Keep it to one page. Monday 8:00 AM ET at the latest."
timeTaken: "2 h"
tools: ["Excel"]
aiTools: ["Claude"]
aiNote: "I use Claude in Excel to speed up analysis and building. I direct the work and review everything it produces."
outcome: "Fixed 11 data problems and showed that, on the weeks reported, Q3 sales were $22,603 (1.4%) under budget."
deliverables:
  - label: "Dashboard workbook (Excel)"
    href: "/samples/sales-export-dashboard/kpi-dashboard.xlsx"
  - label: "One-page dashboard (PDF)"
    href: "/samples/sales-export-dashboard/kpi-dashboard.pdf"
cover: "/samples/sales-export-dashboard/previews/dashboard.webp"
coverAlt: "One-page Q3 dashboard with three 'So what' notes, a budget-by-channel table and chart, the DTC returns trend, on-time shipping by channel and each channel's share of sales"
coverWidth: 1400
coverHeight: 896
previews:
  - src: "/samples/sales-export-dashboard/previews/budget-by-channel.webp"
    alt: "Close-up of the budget table and bar chart: Q3 sales of $1,642,012 against a budget of $1,664,615 for the weeks reported, 1.4 percent under, with TrailMart 6.8 percent under and DTC 5.1 percent over"
    caption: "Close-up: budget by channel, with the TrailMart decimal-slip scenario shown separately"
    width: 1396
    height: 669
dataSource: "Fictional scenario and data from a practice simulation (Kestrel Ridge Outdoor Co.). The work is mine."
date: 2026-10-16
featured: false
draft: false
---
## The brief

Four questions, answered in that order, on one page: are we on budget by channel, are DTC returns getting worse, is on-time shipping holding up before peak, and which channel is carrying us. Clean the export first and say what was fixed. Never overwrite the raw data, and flag gaps instead of filling them.

Deadline: Monday 8:00 AM ET at the latest.

## My approach

I kept the raw export untouched and cleaned a copy, logging every change. The cleaning log lists 11 problems:

- Sales values stored as text, one with a dollar sign and a thousands comma inside it.
- One date in a different format from all the others.
- "Trailmart" and "DTC online " (with a trailing space) written differently from the channel names used elsewhere.
- On-time shipping percentages on two scales (96.6 against 0.951).
- A TrailMart week that appeared twice with identical values, so I removed one.
- A TrailMart sales figure about ten times a normal week while the order count was normal. I kept it out of the headline and showed a corrected view separately, flagged as a probable decimal slip.
- A negative returns value, excluded and not corrected.
- A missing Other Wholesale week, added as a flagged blank and not estimated.
- A budget table that came with the export, used as the dashboard's budget inputs.

The hardest call was the TrailMart figure of $566,594.50. The 142 orders were a normal week and the number is exactly $56,659.45 with the decimal shifted one place, so I did not let it distort the headline.

## What I delivered

- **Raw (untouched):** the export as it arrived.
- **Clean:** the cleaned data.
- **Cleaning log:** the 11 problems and what I did about each.
- **Dashboard:** four questions answered on one page (budget by channel, DTC returns, on-time shipping before peak, which channel is carrying sales), plus a "So what".
- **Covering email:** a five-sentence draft to Dana.

## What I'd do with more time

Rebuild the cleaning in Power Query so every step is recorded and repeatable for Q4, and ask for an export with a fixed number format.
