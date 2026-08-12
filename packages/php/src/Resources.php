<?php

declare(strict_types=1);

namespace PonysAI;

use InvalidArgumentException;

final class Resources
{
    private const PRODUCTS = [
        'homepage' => 'https://ponys.ai/',
        'discover' => 'https://ponys.ai/discover',
        'create' => 'https://ponys.ai/create',
        'character_generator' => 'https://ponys.ai/ai-character-generator',
        'image_generator' => 'https://ponys.ai/ai-image-generator',
        'video_generator' => 'https://ponys.ai/ai-video-generator',
        'ai_girlfriend' => 'https://ponys.ai/ai-girlfriend',
        'ai_boyfriend' => 'https://ponys.ai/ai-boyfriend'
    ];
    private const LOCALES = ['en', 'ja', 'ko', 'zh-tw', 'zh-cn', 'es', 'pt-br'];

    public static function characterUrl(string $slug): string
    {
        $path = dirname(__DIR__) . '/resources/characters.json';
        $characters = json_decode((string) file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
        foreach ($characters as $character) {
            if ($character['slug'] === strtolower(trim($slug))) {
                return $character['url'];
            }
        }
        throw new InvalidArgumentException('Unknown character: ' . $slug);
    }

    public static function productUrl(string $name = 'homepage'): string
    {
        return self::PRODUCTS[$name] ?? throw new InvalidArgumentException('Unknown product: ' . $name);
    }

    public static function feedUrl(string $locale = 'en', string $format = 'json'): string
    {
        if (!in_array($locale, self::LOCALES, true)) {
            throw new InvalidArgumentException('Unsupported locale: ' . $locale);
        }
        if (!in_array($format, ['json', 'xml'], true)) {
            throw new InvalidArgumentException('Format must be json or xml');
        }
        return "https://feeds.ponys.ai/feeds/{$locale}.{$format}";
    }

    public static function characterFeedUrl(string $locale = 'en'): string
    {
        if (!in_array($locale, self::LOCALES, true)) {
            throw new InvalidArgumentException('Unsupported locale: ' . $locale);
        }
        return "https://feeds.ponys.ai/characters/{$locale}.json";
    }

    public static function widgetManifestUrl(): string
    {
        return 'https://feeds.ponys.ai/api/benchmark-widget.json';
    }

    public static function openDataCatalogUrl(): string
    {
        return 'https://feeds.ponys.ai/open-data/catalog.json';
    }

    public static function creatorUrl(string $product, string $publisher, string $locale = 'en'): string
    {
        return self::productUrl($product) . '?' . http_build_query([
            'utm_source' => $publisher,
            'utm_medium' => 'affiliate',
            'utm_campaign' => 'creator_resources',
            'utm_content' => $locale,
        ]);
    }
}
