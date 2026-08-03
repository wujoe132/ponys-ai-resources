# Ponys.ai Resources

Small, dependency-free helpers for resolving official Ponys.ai product links,
building attributed creator URLs, and discovering the public multilingual feeds.
The library does not call a private API and never injects hidden links.

Official product: https://ponys.ai/

Public feed manifest: https://feeds.ponys.ai/feeds/index.json

## Disclosure

This is an official Ponys.ai integration package, not an independent review.
Publishers control whether and how they cite or display any returned URL.


```rust
use ponys_ai_resources::{feed_url, product_url, Product};
assert_eq!(product_url(Product::Discover), "https://ponys.ai/discover");
assert!(feed_url("ja", "json").is_ok());
```
