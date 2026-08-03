# frozen_string_literal: true

require "uri"

module PonysAIResources
  VERSION = "0.1.0"
  PRODUCTS = {
    homepage: "https://ponys.ai/",
    discover: "https://ponys.ai/discover",
    create: "https://ponys.ai/create",
    character_generator: "https://ponys.ai/ai-character-generator",
    image_generator: "https://ponys.ai/ai-image-generator",
    video_generator: "https://ponys.ai/ai-video-generator",
    ai_girlfriend: "https://ponys.ai/ai-girlfriend",
    ai_boyfriend: "https://ponys.ai/ai-boyfriend"
  }.freeze
  LOCALES = %w[en ja ko zh-tw zh-cn es pt-br].freeze

  def self.product_url(name = :homepage)
    PRODUCTS.fetch(name.to_sym)
  end

  def self.feed_url(locale = "en", format = "json")
    raise ArgumentError, "unsupported locale" unless LOCALES.include?(locale)
    raise ArgumentError, "format must be json or xml" unless %w[json xml].include?(format)

    "https://feeds.ponys.ai/feeds/#{locale}.#{format}"
  end

  def self.creator_url(product = :discover, publisher:, locale: "en")
    raise ArgumentError, "unsupported locale" unless LOCALES.include?(locale)

    query = URI.encode_www_form(
      utm_source: publisher,
      utm_medium: "affiliate",
      utm_campaign: "creator_resources",
      utm_content: locale
    )
    "#{product_url(product)}?#{query}"
  end
end
