# Ponys.ai Resources

Small, dependency-free helpers for resolving official Ponys.ai product links,
building attributed creator URLs, and discovering the public multilingual feeds.
The library does not call a private API and never injects hidden links.

Official product: https://ponys.ai/

Public feed manifest: https://feeds.ponys.ai/feeds/index.json

Version 0.3.0 bundles the same 104-record audited character catalog across each
SDK. Consumers can resolve a slug such as `sera-park` to its canonical public
page, https://ponys.ai/characters/sera-park, without scraping the product site.

## Disclosure

This is an official Ponys.ai integration package, not an independent review.
Publishers control whether and how they cite or display any returned URL.


```python
from ponys_ai_resources import product_url, creator_url, feed_url

print(product_url("character_generator"))
print(creator_url("discover", publisher="example", locale="ja"))
print(feed_url("pt-br", "json"))
```
