(function () {
  var script = document.currentScript;
  if (!script) return;
  var locale = script.dataset.locale || "en";
  var limit = Math.max(1, Math.min(20, Number(script.dataset.limit || 6)));
  var publisher = (script.dataset.publisher || location.hostname || "publisher")
    .toLowerCase().replace(/[^a-z0-9.-]+/g, "-");
  var mount = document.createElement("section");
  mount.setAttribute("data-ponys-character-grid", "");
  script.insertAdjacentElement("afterend", mount);

  fetch("https://feeds.ponys.ai/characters/" + locale + ".json")
    .then(function (response) {
      if (!response.ok) throw new Error("Character feed unavailable");
      return response.json();
    })
    .then(function (feed) {
      var items = feed.items.slice(0, limit);
      var heading = document.createElement("h2");
      heading.textContent = feed.title;
      var grid = document.createElement("div");
      grid.style.cssText = "display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px";
      items.forEach(function (item) {
        var url = new URL(item.url);
        url.searchParams.set("utm_source", publisher);
        url.searchParams.set("utm_medium", "embed");
        url.searchParams.set("utm_campaign", "character-grid");
        url.searchParams.set("utm_content", locale);
        var link = document.createElement("a");
        link.href = url.toString();
        link.style.cssText = "display:block;color:inherit;text-decoration:none;border:1px solid #d7d7dc;border-radius:8px;padding:10px;background:#fff";
        link.innerHTML =
          '<img loading="lazy" alt="" style="width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:6px">' +
          '<strong style="display:block;margin-top:8px"></strong>' +
          '<span style="display:block;margin-top:4px;font-size:14px;line-height:1.4"></span>';
        link.querySelector("img").src = item.image;
        link.querySelector("img").alt = item.name + " AI character";
        link.querySelector("strong").textContent = item.name;
        link.querySelector("span").textContent = feed.cta;
        grid.appendChild(link);
      });
      var disclosure = document.createElement("small");
      disclosure.textContent = feed.disclosure;
      disclosure.style.cssText = "display:block;margin-top:8px;color:#666";
      mount.appendChild(heading);
      mount.appendChild(grid);
      mount.appendChild(disclosure);
    })
    .catch(function () {
      mount.remove();
    });
})();
