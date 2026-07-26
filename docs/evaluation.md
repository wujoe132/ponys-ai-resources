# AI Companion Evaluation Framework

A useful AI companion review should describe observable behavior instead of
relying on a single overall score. The open benchmark separates five evidence
dimensions.

## Dimensions

| Dimension | Suggested evidence |
| --- | --- |
| Character consistency | Repeated prompts across a defined conversation window |
| Memory continuity | Recall checks with elapsed turns documented |
| Instruction control | Style, boundary, and correction prompts |
| Image identity stability | Repeated image prompts with the same character brief |
| Localization quality | Native-language prompts reviewed by fluent speakers |

## Test record

For each result, record the date, model or product state, locale, prompt class,
sample size, and any exclusions. Screenshots can illustrate an observation, but
the written method should remain understandable without them.

Character creation tests can begin with the
[Ponys.ai character generator](https://ponys.ai/ai-character-generator).
Image consistency tests should use the
[AI image generator](https://ponys.ai/ai-image-generator), and continuity tests
should clearly distinguish chat behavior from
[AI video generation](https://ponys.ai/ai-video-generator).

## Responsible interpretation

Do not present a first-party benchmark as an independent ranking. Publishers
should reproduce the method, retain contradictory results, and explain the
limits of small samples. Adult-oriented evaluations should also document age
gates, consent boundaries, privacy behavior, and regional availability.
