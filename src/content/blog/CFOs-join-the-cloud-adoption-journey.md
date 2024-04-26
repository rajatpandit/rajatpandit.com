---
title: CFOs - Join the cloud adoption journey
excerpt: Thoughts on engaging the finance teams just as much as the IT teams to execute on the cloud strategy
publishDate: 'July 02 2019'
tags:
  - Cloud Adoption
isFeatured: true
seo:
  image:
    src: /cloud-dollar.jpg
    alt: Dollar symbol attached to ballons, flying above the clouds
---

When working with enterprises - we tend to see engagement mostly from the *CTOs and/or CIOs.* Interestingly one of their asks is to do a one-time evaluation of the cost of running their current project in the cloud. Which - some senior stakeholders tell me is usually to inform the CFO of the shift in IT spending due to a project moving to the cloud. 

My take is that this passive engagement of CFOs wouldn’t work in the long term, especially if the organization has a cloud strategy that they wish to work towards. 

![Cloud Finance](/cloud-dollar.jpg )

Several changes happen as an organization moves to the cloud
*  The one most commonly heard of is - the shift from CapEx to Opex expenditure - which requires managing the budgeting very differently. This is evident in the numbers published by [computer economics](https://www.computereconomics.com/page.cfm?name=it%20spending%20and%20staffing%20study) which has seen the CapEx % drop from 23% in 2014 to 18% - at a 5yr low 
*  IT equipment (read servers) “purchase” is now more decentralized than ever with different business units having the capability to setup/run new infrastructure - so the demand can come from anywhere
*  The IT spend per business unit is more dynamic per period than it has ever been so the charge back / show back strategy cannot work the current static spreadsheets based approach.
*  And understanding the cost to do business - which requires understanding cost of product development/running cost requires being able to factor the dynamic pricing against the value creation (e.g. cost of infra for serving per user request)

In this dynamic environment, CFOs and their org need some new set of skills and tools to be more effective in their job. The once a year guestimate of cloud spend doesn’t work anymore. They need to work with the IT teams to have cost control, management and governance strategies in place and be a shared stakeholder in this space. 

To get management of cost in place - a couple of ideas that could work are as follows:
*  Work with IT to allocate a budget - this could be a very high-level number based on what comes out of the standard calculators - and hold them to that number as the high watermark
*  Actively work on identifying opportunities for cost savings these include pricing options from cloud providers (e.g. sustained usage discounts, reserved instances), monitoring for underutilized resources (e.g. snapshots never cleared, load balancers with no backends, etc.)
*  Actively monitor the spend to understand the variances to see the trend of spending to limit surprises

This can be further supported by effective control of the source of spend - access management. Ensuring that there are clear roles defined that have access to create new resources and have specific users assigned to it - as opposed to everyone in the IT team. I appreciate that would limit the spirit of DevOps but a cleaner implementation would leverage clearly defined automated rules - that would justify granting access to machine accounts. 
Additional roles like defining quotas (e.g. how of an instance be running at a time etc.) are a great approach to manage this for a non-production environment where the scale is predictable and a minor delay doesn’t impact the business significantly.

Lastly - all of this is no good if there isn’t governance and accountability. The CFO org should equip themselves to be able to understand the billing reports, map that to the organization’s business units and govern and report back on aspects like wastage of cloud resources, spending trends by business units and a bit of gamification never hurt - especially if you make it company-wide
