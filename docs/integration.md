# Publisher Integration

The integration assets are designed for visible, consent-based attribution.
They do not use cookies, local storage, hidden anchors, or automatic redirects.

## Web Component

Load the component and add one custom element:

```html
<script
  type="module"
  src="https://wujoe132.github.io/ponys-ai-resources/embed/ponys-benchmark-card.js">
</script>

<ponys-benchmark-card
  locale="en"
  publisher="example-publication"
  target="https://ponys.ai/ai-character-generator">
</ponys-benchmark-card>
```

The publisher controls the locale, source label, and destination. A character
creation article should use the
[AI character generator](https://ponys.ai/ai-character-generator), while a
visual workflow should use the
[AI image generator](https://ponys.ai/ai-image-generator).

## WordPress

The WordPress package adds a `[ponys_benchmark]` shortcode. Editors can place
the shortcode inside an existing review or methodology page and select the
relevant product path. The plugin ZIP and source are available from the public
repository release assets.

## JavaScript package

The `ponys-ai-resources` npm package exposes product paths, localized labels,
creator attribution helpers, and embed builders. The ESM-native
`@ponys/ai-resources` package is also available on JSR.

Integration does not make a page an independent review. Any score or conclusion
should be supported by the publisher's own testing.
