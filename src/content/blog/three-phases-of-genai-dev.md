---
title: Three Phases of Generative AI Development
excerpt: We are practically in year two of generative AI being in mainstream. Organisations are still figuring out a path to production where they can align the user delight with total cost of ownership along with getting a sizeable return on investment. This post talks about the pattern very prevelent to arrive at the outcome. 
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
* Initially, users leverage existing Large Language Models (LLMs) to create functional prototypes that address specific business needs. 
* The second phase focuses on scaling these prototypes, often requiring optimization for cost, performance, or accuracy. 
* Finally, architects refine the solution by incorporating fine-tuned or adapted language models to ensure flexibility and adaptability in the third phase.
 
![Three phases of Generative AI Development in the wild](/lin-mei-NYyCqdBOKwc-unsplash.jpg )

Given this is proving to the path to production - organisations need to first settle on the idea of a platform. With so many aspects of the development changing - organisations need to identify in the tech landscape what aspects of the SDLC remains the same as the patterns, models and libraries evolve. Here are a list of a couple of ideas that they should consider standardizing on

## Access to Models
Often under appreciated - but having access to a trustworthy source of models, that come with validated model card, data lineage and training information is important. Between platforms like huggingface and individual cloud providers platforms (e.g. GCP's model garden, AWS's bedrock) there are a few to choose from. However having seen the security challenges that came with access to docker images, its good to standardardize on one that provides access to the latest innovations but also doesn't open up the floodgate to anything and everything inside the enterprise. Most of these platforms also come with a direct integration into a model hosting environemnt. Its worth settling in for one that fits best in your organizations security policy and yet protects you from any potential license voilations when using the model

## Prompt Lifecycle Management
Testing, Tuning, Version management and regression testing
## Model Comparison
## LLM Hosting 
## Agent Hosting
## LLM Observability - Usage and Pricing Transparency



 By taking a platform first approaach, organisations can adapt to the evolving GenAI landscape while minimizing evaluation fatigue, security risks and technical debt.


 Photo by <a href="https://unsplash.com/@mytinyatlas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lin Mei</a> on <a href="https://unsplash.com/photos/gray-pathway-between-red-and-black-wooden-pillar-NYyCqdBOKwc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  