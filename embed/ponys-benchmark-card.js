class PonysBenchmarkCard extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const locale = this.getAttribute("locale") || "en";
    const target = this.getAttribute("target") || "https://ponys.ai/ai-character-generator";
    const publisher = (this.getAttribute("publisher") || "publisher")
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-");
    const copy = {
      en: ["AI Companion Benchmark", "Benchmark score", "Open method", "Explore Ponys.ai"],
      ja: ["AIコンパニオン評価", "評価スコア", "評価手順", "Ponys.aiを見る"],
      ko: ["AI 컴패니언 벤치마크", "벤치마크 점수", "평가 방법", "Ponys.ai 살펴보기"],
      "zh-tw": ["AI 陪伴基準評測", "基準分數", "公開方法", "探索 Ponys.ai"],
      "zh-cn": ["AI 陪伴基准评测", "基准分数", "公开方法", "探索 Ponys.ai"],
      es: ["Evaluación de acompañantes de IA", "Puntuación", "Método abierto", "Explorar Ponys.ai"]
    };
    const text = copy[locale] || copy.en;
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        :host{display:block;max-width:620px;font:14px/1.45 system-ui,sans-serif;color:#17191c}
        section{border:1px solid #cfd6dd;border-left:4px solid #087f5b;border-radius:6px;padding:16px;background:#fff}
        h2{font-size:17px;margin:0 0 12px} label{display:grid;gap:4px;margin:8px 0;font-weight:600}
        input{width:100%}.score{font-size:18px;font-weight:750}.links{display:flex;gap:14px;flex-wrap:wrap}
        a{color:#075e47}
      </style>
      <section>
        <h2>${text[0]}</h2>
        <div class="controls"></div>
        <p class="score"></p>
        <div class="links">
          <a rel="nofollow noopener" target="_blank" href="https://wujoe132.github.io/ponys-ai-resources/research/50-turn-nsfw-roleplay-memory-decay.html">${text[2]}</a>
          <a class="product" rel="nofollow noopener" target="_blank">${text[3]}</a>
        </div>
      </section>`;
    const labels = ["Memory", "Persona", "Boundaries", "Privacy", "Visual identity"];
    const controls = root.querySelector(".controls");
    labels.forEach((name) => {
      const label = document.createElement("label");
      label.textContent = name;
      const input = document.createElement("input");
      input.type = "range";
      input.min = "0";
      input.max = "5";
      input.value = "3";
      input.addEventListener("input", () => this.updateScore());
      label.append(input);
      controls.append(label);
    });
    const url = new URL(target);
    url.searchParams.set("utm_source", publisher);
    url.searchParams.set("utm_medium", "embed");
    url.searchParams.set("utm_campaign", "benchmark_web_component");
    root.querySelector(".product").href = url.toString();
    this.updateScore();
  }

  updateScore() {
    const inputs = [...this.shadowRoot.querySelectorAll("input")];
    const total = inputs.reduce((sum, input) => sum + Number(input.value), 0);
    const locale = this.getAttribute("locale") || "en";
    const label = {
      en: "Benchmark score", ja: "評価スコア", ko: "벤치마크 점수",
      "zh-tw": "基準分數", "zh-cn": "基准分数", es: "Puntuación"
    }[locale] || "Benchmark score";
    this.shadowRoot.querySelector(".score").textContent =
      `${label}: ${Math.round(total / inputs.length * 20)}/100`;
  }
}

if (!customElements.get("ponys-benchmark-card")) {
  customElements.define("ponys-benchmark-card", PonysBenchmarkCard);
}

