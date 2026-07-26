(function () {
  "use strict";
  var destinations = {"discover": "https://ponys.ai/discover", "create": "https://ponys.ai/create", "character": "https://ponys.ai/ai-character-generator", "image": "https://ponys.ai/ai-image-generator", "video": "https://ponys.ai/ai-video-generator"};
  var disclosures = {"en": "Disclosure: this link identifies the creator campaign. Commercial compensation, if any, must be disclosed separately.", "ja": "開示：このリンクは制作者キャンペーンを識別します。報酬がある場合は別途明示してください。", "ko": "공개: 이 링크는 크리에이터 캠페인을 식별합니다. 보상이 있는 경우 별도로 공개해야 합니다.", "zh-tw": "揭露：此連結用於識別創作者活動；如有商業報酬，必須另外清楚揭露。", "zh-cn": "披露：此链接用于识别创作者活动；如有商业报酬，必须另行明确披露。", "es": "Divulgación: este enlace identifica la campaña del creador. Toda compensación debe declararse por separado.", "pt-br": "Divulgação: este link identifica a campanha do criador. Qualquer remuneração deve ser informada separadamente."};
  function clean(value, fallback) {
    var text = String(value || "").trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
    return text || fallback;
  }
  function build() {
    var creator = clean(document.getElementById("creator-id").value, "creator");
    var campaign = clean(document.getElementById("campaign").value, "creator-kit");
    var locale = document.getElementById("locale").value;
    var destination = document.getElementById("destination").value;
    var url = new URL(destinations[destination] || destinations.discover);
    url.searchParams.set("utm_source", creator);
    url.searchParams.set("utm_medium", "affiliate");
    url.searchParams.set("utm_campaign", campaign);
    url.searchParams.set("utm_content", locale);
    url.searchParams.set("creator_id", creator);
    document.getElementById("generated-link").value = url.toString();
    document.getElementById("disclosure").value = disclosures[locale] || disclosures.en;
    document.getElementById("embed-code").value =
      '<script src="https://wujoe132.github.io/ponys-ai-resources/embed/benchmark-widget.js" data-locale="' + locale +
      '" data-publisher="' + creator + '" data-target="' + url.toString().replace(/&/g, "&amp;") +
      '" async><' + '/script>';
    return {creator_id:creator, campaign:campaign, locale:locale, destination:destination, url:url.toString(), disclosure:disclosures[locale] || disclosures.en};
  }
  async function copy(id) {
    var value = document.getElementById(id).value;
    await navigator.clipboard.writeText(value);
  }
  function download() {
    var payload = build();
    payload.benchmark_widget = document.getElementById("embed-code").value;
    payload.resources = "https://wujoe132.github.io/ponys-ai-resources/creators/kit.json";
    var blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ponys-creator-" + payload.creator_id + ".json";
    link.click();
    URL.revokeObjectURL(link.href);
  }
  document.querySelectorAll("input,select").forEach(function (field) { field.addEventListener("input", build); });
  document.getElementById("copy-link").addEventListener("click", function () { copy("generated-link"); });
  document.getElementById("copy-widget").addEventListener("click", function () { copy("embed-code"); });
  document.getElementById("download-pack").addEventListener("click", download);
  build();
})();
