---
title: Three Phases of Generative AI Development
excerpt: We are practically in year two of generative AI being in mainstream. Organisations are still figuring out a path to production where they can align the user delight with total cost of ownership along with getting a sizeable return on investment. This post talks about the pattern very prevalent to arrive at the outcome. 
publishDate: 'July 27 2024'
isFeatured: true
tags:
  - Emerging Tech
seo:
  image:
    src: /lin-mei-NYyCqdBOKwc-unsplash.jpg
    alt: Three phases of Generative AI Development in the wild
---

The typical adoption of Generative AI (GenAI) involves three distinct phases. 
* Initially, users **leverage existing Large Language Models (LLMs) to create functional prototypes** that address specific business needs. 
* The second phase **focuses on scaling these prototypes**, often requiring optimization for cost, performance, or accuracy. 
* Finally, architects refine the solution by **incorporating fine-tuned or adapted language models to ensure flexibility and adaptability** in the third phase.
 
![Three phases of Generative AI Development in the wild](/lin-mei-NYyCqdBOKwc-unsplash.jpg )

Given this is proving to be the path to production - organisations need to first settle on the idea of a platform. With so many aspects of the development changing - organisations need to identify in the GenAI landscape what aspects of the SDLC remains the same as the patterns, models and libraries evolve. Here are a list of of areas that are worth considering to standardize on.

- **Access to Models** - Access to model card, visibility of data used for training, license details, support
- **Prompt Lifecycle Management** - Testing, Tuning, Version Management, Regression Testing, Migration between models
- **Model Comparison** - Golden Dataset, method of evaluation 
- **LLM Hosting** - Self Managed vs. Managed service, optimisations to match your load pattern
- **Agent Hosting** - Security, logging, observability, version management (see reasoning engine from gcp for e.g. )
- **LLM Observability** - Usage and Pricing Transparency (e.g. see genkit from firebase)

 By taking a platform first approach, organisations can adapt to the evolving GenAI landscape while minimizing evaluation fatigue, security risks and technical debt.


 Photo by <a href="https://unsplash.com/@mytinyatlas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lin Mei</a> on <a href="https://unsplash.com/photos/gray-pathway-between-red-and-black-wooden-pillar-NYyCqdBOKwc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  