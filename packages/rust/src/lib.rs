//! Official Ponys.ai public resource helpers.

pub const CHARACTER_CATALOG_JSON: &str = include_str!("../data/characters.json");
pub const CHARACTERS: &[(&str, &str)] = &[
    ("aaliyah-banks", "https://ponys.ai/characters/aaliyah-banks"),
    ("adrian", "https://ponys.ai/characters/adrian"),
    ("aeroha", "https://ponys.ai/characters/aeroha"),
    ("akari", "https://ponys.ai/characters/akari"),
    ("amanda", "https://ponys.ai/characters/amanda"),
    ("anthea", "https://ponys.ai/characters/anthea"),
    ("ari", "https://ponys.ai/characters/ari"),
    ("astrid", "https://ponys.ai/characters/astrid"),
    ("aubrey", "https://ponys.ai/characters/aubrey"),
    ("ava", "https://ponys.ai/characters/ava"),
    ("camila-duarte", "https://ponys.ai/characters/camila-duarte"),
    ("camila-reyes", "https://ponys.ai/characters/camila-reyes"),
    ("change", "https://ponys.ai/characters/change"),
    ("character-43449110", "https://ponys.ai/characters/character-43449110"),
    ("chloe-monroe", "https://ponys.ai/characters/chloe-monroe"),
    ("clarissa", "https://ponys.ai/characters/clarissa"),
    ("coco", "https://ponys.ai/characters/coco"),
    ("darius", "https://ponys.ai/characters/darius"),
    ("dasha", "https://ponys.ai/characters/dasha"),
    ("dr-lucia-moreno", "https://ponys.ai/characters/dr-lucia-moreno"),
    ("eira", "https://ponys.ai/characters/eira"),
    ("eli", "https://ponys.ai/characters/eli"),
    ("elsie-bloom", "https://ponys.ai/characters/elsie-bloom"),
    ("emberveil", "https://ponys.ai/characters/emberveil"),
    ("emma", "https://ponys.ai/characters/emma"),
    ("ethan-caldwell", "https://ponys.ai/characters/ethan-caldwell"),
    ("eve", "https://ponys.ai/characters/eve"),
    ("guixiang", "https://ponys.ai/characters/guixiang"),
    ("haitang", "https://ponys.ai/characters/haitang"),
    ("han-so-yeon", "https://ponys.ai/characters/han-so-yeon"),
    ("hana", "https://ponys.ai/characters/hana"),
    ("hassan", "https://ponys.ai/characters/hassan"),
    ("hatice", "https://ponys.ai/characters/hatice"),
    ("hina", "https://ponys.ai/characters/hina"),
    ("hiokimi", "https://ponys.ai/characters/hiokimi"),
    ("jace", "https://ponys.ai/characters/jace"),
    ("jaxon", "https://ponys.ai/characters/jaxon"),
    ("ji-hoon", "https://ponys.ai/characters/ji-hoon"),
    ("joe", "https://ponys.ai/characters/joe"),
    ("kai", "https://ponys.ai/characters/kai"),
    ("kiara", "https://ponys.ai/characters/kiara"),
    ("kirishima", "https://ponys.ai/characters/kirishima"),
    ("kurose", "https://ponys.ai/characters/kurose"),
    ("leo", "https://ponys.ai/characters/leo"),
    ("liana", "https://ponys.ai/characters/liana"),
    ("lynne", "https://ponys.ai/characters/lynne"),
    ("lyra", "https://ponys.ai/characters/lyra"),
    ("maribel-cruz", "https://ponys.ai/characters/maribel-cruz"),
    ("marisol-vega", "https://ponys.ai/characters/marisol-vega"),
    ("marlene-hart", "https://ponys.ai/characters/marlene-hart"),
    ("mason", "https://ponys.ai/characters/mason"),
    ("mei", "https://ponys.ai/characters/mei"),
    ("meow", "https://ponys.ai/characters/meow"),
    ("miko", "https://ponys.ai/characters/miko"),
    ("mila", "https://ponys.ai/characters/mila"),
    ("miyuki", "https://ponys.ai/characters/miyuki"),
    ("mizuki", "https://ponys.ai/characters/mizuki"),
    ("monique", "https://ponys.ai/characters/monique"),
    ("moretti", "https://ponys.ai/characters/moretti"),
    ("mulan", "https://ponys.ai/characters/mulan"),
    ("na1", "https://ponys.ai/characters/na1"),
    ("na2", "https://ponys.ai/characters/na2"),
    ("na3", "https://ponys.ai/characters/na3"),
    ("na4", "https://ponys.ai/characters/na4"),
    ("nana", "https://ponys.ai/characters/nana"),
    ("naomi", "https://ponys.ai/characters/naomi"),
    ("natalie", "https://ponys.ai/characters/natalie"),
    ("nefara", "https://ponys.ai/characters/nefara"),
    ("noah", "https://ponys.ai/characters/noah"),
    ("noxie", "https://ponys.ai/characters/noxie"),
    ("nuwa", "https://ponys.ai/characters/nuwa"),
    ("nyx", "https://ponys.ai/characters/nyx"),
    ("odette", "https://ponys.ai/characters/odette"),
    ("phuwin", "https://ponys.ai/characters/phuwin"),
    ("pixi-vayne", "https://ponys.ai/characters/pixi-vayne"),
    ("rami", "https://ponys.ai/characters/rami"),
    ("rika", "https://ponys.ai/characters/rika"),
    ("rin", "https://ponys.ai/characters/rin"),
    ("roro", "https://ponys.ai/characters/roro"),
    ("rosario", "https://ponys.ai/characters/rosario"),
    ("rovie", "https://ponys.ai/characters/rovie"),
    ("rowan", "https://ponys.ai/characters/rowan"),
    ("ruby", "https://ponys.ai/characters/ruby"),
    ("safira", "https://ponys.ai/characters/safira"),
    ("sera-park", "https://ponys.ai/characters/sera-park"),
    ("sofia-maren", "https://ponys.ai/characters/sofia-maren"),
    ("sophie", "https://ponys.ai/characters/sophie"),
    ("soyeon", "https://ponys.ai/characters/soyeon"),
    ("sue", "https://ponys.ai/characters/sue"),
    ("summer-st-claire", "https://ponys.ai/characters/summer-st-claire"),
    ("suzuki", "https://ponys.ai/characters/suzuki"),
    ("tessa", "https://ponys.ai/characters/tessa"),
    ("valeria", "https://ponys.ai/characters/valeria"),
    ("vanessa", "https://ponys.ai/characters/vanessa"),
    ("vava", "https://ponys.ai/characters/vava"),
    ("vincent", "https://ponys.ai/characters/vincent"),
    ("wen", "https://ponys.ai/characters/wen"),
    ("yui", "https://ponys.ai/characters/yui"),
    ("yuna", "https://ponys.ai/characters/yuna"),
    ("yuwei", "https://ponys.ai/characters/yuwei"),
    ("zaria-cole", "https://ponys.ai/characters/zaria-cole"),
    ("zhixia", "https://ponys.ai/characters/zhixia"),
    ("zoey", "https://ponys.ai/characters/zoey"),
    ("zuri-bennett", "https://ponys.ai/characters/zuri-bennett")
];

pub fn character_url(slug: &str) -> Option<&'static str> {
    CHARACTERS
        .iter()
        .find(|(candidate, _)| *candidate == slug)
        .map(|(_, url)| *url)
}

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

pub fn character_feed_url(locale: &str) -> Result<String, &'static str> {
    if !["en", "ja", "ko", "zh-tw", "zh-cn", "es", "pt-br"].contains(&locale) {
        return Err("unsupported locale");
    }
    Ok(format!("https://feeds.ponys.ai/characters/{locale}.json"))
}

pub fn widget_manifest_url() -> &'static str {
    "https://feeds.ponys.ai/api/benchmark-widget.json"
}

pub fn open_data_catalog_url() -> &'static str {
    "https://feeds.ponys.ai/open-data/catalog.json"
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn resolves_product_and_feed() {
        assert_eq!(product_url(Product::Discover), "https://ponys.ai/discover");
        assert_eq!(feed_url("ja", "json").unwrap(), "https://feeds.ponys.ai/feeds/ja.json");
        assert_eq!(character_feed_url("ko").unwrap(), "https://feeds.ponys.ai/characters/ko.json");
        assert_eq!(widget_manifest_url(), "https://feeds.ponys.ai/api/benchmark-widget.json");
        assert_eq!(open_data_catalog_url(), "https://feeds.ponys.ai/open-data/catalog.json");
        assert_eq!(character_url("sera-park"), Some("https://ponys.ai/characters/sera-park"));
        assert_eq!(CHARACTERS.len(), 104);
    }
}
