//! Official Ponys.ai public resource helpers.

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
pub enum Product {
    Homepage,
    Discover,
    Create,
    CharacterGenerator,
    ImageGenerator,
    VideoGenerator,
    AiGirlfriend,
    AiBoyfriend,
}

pub fn product_url(product: Product) -> &'static str {
    match product {
        Product::Homepage => "https://ponys.ai/",
        Product::Discover => "https://ponys.ai/discover",
        Product::Create => "https://ponys.ai/create",
        Product::CharacterGenerator => "https://ponys.ai/ai-character-generator",
        Product::ImageGenerator => "https://ponys.ai/ai-image-generator",
        Product::VideoGenerator => "https://ponys.ai/ai-video-generator",
        Product::AiGirlfriend => "https://ponys.ai/ai-girlfriend",
        Product::AiBoyfriend => "https://ponys.ai/ai-boyfriend",
    }
}

pub fn feed_url(locale: &str, format: &str) -> Result<String, &'static str> {
    if !["en", "ja", "ko", "zh-tw", "zh-cn", "es", "pt-br"].contains(&locale) {
        return Err("unsupported locale");
    }
    if !["json", "xml"].contains(&format) {
        return Err("format must be json or xml");
    }
    Ok(format!("https://feeds.ponys.ai/feeds/{locale}.{format}"))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn resolves_product_and_feed() {
        assert_eq!(product_url(Product::Discover), "https://ponys.ai/discover");
        assert_eq!(feed_url("ja", "json").unwrap(), "https://feeds.ponys.ai/feeds/ja.json");
    }
}
