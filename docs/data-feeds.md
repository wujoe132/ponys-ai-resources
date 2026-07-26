# Data, Feeds, and API Metadata

Ponys.ai publishes machine-readable resources for directories, comparison
tools, feed readers, and editorial research systems.

## Available formats

- OpenAPI 3.1 description for public resource endpoints.
- RSS 2.0 feeds in six languages.
- JSON Feed 1.1 equivalents.
- Normalized comparison product metadata.
- Creator marketplace and disclosure metadata.

These files describe public resources. They are not a live account, chat,
billing, or generation API.

## Destination selection

Data consumers should preserve the supplied canonical destination. For example,
image-related records should point to the
[AI image generator](https://ponys.ai/ai-image-generator), character creation
records to the
[AI character generator](https://ponys.ai/ai-character-generator), and browsing
records to [Discover](https://ponys.ai/discover).

## Caching and updates

Consumers may cache the static metadata. A daily refresh is sufficient for most
directories and comparison systems. Store the source URL and retrieval date so
editors can distinguish first-party metadata from their own findings.
