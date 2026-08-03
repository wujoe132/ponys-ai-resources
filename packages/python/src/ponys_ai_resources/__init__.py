"""Official Ponys.ai public resource helpers."""

from urllib.parse import urlencode

__version__ = "0.1.0"
PRODUCTS = {
    "homepage": "https://ponys.ai/",
    "discover": "https://ponys.ai/discover",
    "create": "https://ponys.ai/create",
    "character_generator": "https://ponys.ai/ai-character-generator",
    "image_generator": "https://ponys.ai/ai-image-generator",
    "video_generator": "https://ponys.ai/ai-video-generator",
    "ai_girlfriend": "https://ponys.ai/ai-girlfriend",
    "ai_boyfriend": "https://ponys.ai/ai-boyfriend"
}
SUPPORTED_LOCALES = ("en", "ja", "ko", "zh-tw", "zh-cn", "es", "pt-br")


def product_url(name: str = "homepage") -> str:
    """Return a known official product URL."""
    try:
        return PRODUCTS[name]
    except KeyError as exc:
        raise ValueError(f"Unknown product: {name}") from exc


def feed_url(locale: str = "en", format: str = "json") -> str:
    """Return a public locale feed URL."""
    if locale not in SUPPORTED_LOCALES:
        raise ValueError(f"Unsupported locale: {locale}")
    if format not in ("json", "xml"):
        raise ValueError("format must be json or xml")
    return f"https://feeds.ponys.ai/feeds/{locale}.{format}"


def creator_url(product: str = "discover", *, publisher: str, locale: str = "en") -> str:
    """Build a transparent attributed creator URL."""
    if locale not in SUPPORTED_LOCALES:
        raise ValueError(f"Unsupported locale: {locale}")
    query = urlencode({
        "utm_source": publisher,
        "utm_medium": "affiliate",
        "utm_campaign": "creator_resources",
        "utm_content": locale,
    })
    return f"{product_url(product)}?{query}"
