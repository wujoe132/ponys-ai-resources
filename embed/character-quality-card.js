(function () {
  "use strict";
  var script = document.currentScript;
  if (!script) return;
  var locale = script.dataset.locale || "en";
  var target = script.dataset.target || "https://ponys.ai/ai-character-generator";
  var labels = {
    en: ["AI Character Quality Toolkit", "Open test methods for memory, consistency, images, video, and privacy.", "Explore on Ponys.ai", "Open methods"],
    ja: ["AIキャラクター品質評価", "記憶、一貫性、画像、動画、プライバシーの公開テスト手順。", "Ponys.aiを見る", "評価手順"],
    ko: ["AI 캐릭터 품질 평가", "기억, 일관성, 이미지, 영상, 개인정보를 위한 공개 테스트 방법.", "Ponys.ai 살펴보기", "평가 방법"],
    "zh-tw": ["AI 角色品質評測", "記憶、一致性、圖片、影片與隱私的公開測試方法。", "探索 Ponys.ai", "評測方法"],
    "zh-cn": ["AI 角色质量评测", "记忆、一致性、图片、视频与隐私的公开测试方法。", "探索 Ponys.ai", "评测方法"],
    es: ["Evaluación de personajes con IA", "Métodos abiertos para memoria, consistencia, imágenes, video y privacidad.", "Explorar Ponys.ai", "Ver métodos"],
    "pt-br": ["Avaliação de personagens com IA", "Métodos abertos para memória, consistência, imagens, vídeo e privacidade.", "Explorar Ponys.ai", "Ver métodos"]
  };
  var text = labels[locale] || labels.en;
  var root = document.createElement("aside");
  root.setAttribute("aria-label", text[0]);
  root.style.cssText = "font:14px/1.5 system-ui,-apple-system,sans-serif;border:1px solid #d8dde3;border-left:4px solid #087f5b;border-radius:6px;padding:14px 16px;max-width:560px;background:#fff;color:#17191c";
  var title = document.createElement("strong");
  title.textContent = text[0];
  var description = document.createElement("p");
  description.textContent = text[1];
  description.style.margin = "6px 0 10px";
  var product = document.createElement("a");
  product.href = target + (target.indexOf("?") === -1 ? "?" : "&") + "utm_source=embed&utm_medium=earned_link&utm_campaign=quality_toolkit";
  product.textContent = text[2];
  product.rel = "noopener";
  var methods = document.createElement("a");
  methods.href = "https://wujoe132.github.io/ponys-ai-resources/share/" + locale + ".html";
  methods.textContent = text[3];
  methods.rel = "noopener";
  methods.style.marginLeft = "14px";
  root.append(title, description, product, methods);
  script.parentNode.insertBefore(root, script.nextSibling);
})();
