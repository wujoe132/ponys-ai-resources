(function () {
  "use strict";
  var previewScript;
  var localWidgetUrl = new URL("./benchmark-widget.js", document.currentScript.src).toString();
  function render() {
    var locale = document.getElementById("widget-locale").value;
    var publisher = document.getElementById("widget-publisher").value.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-") || "publisher";
    var method = document.getElementById("widget-method").value;
    var target = document.getElementById("widget-target").value;
    var code = '<script src="https://wujoe132.github.io/ponys-ai-resources/embed/benchmark-widget.js" data-locale="' + locale +
      '" data-publisher="' + publisher + '" data-method="' + method + '" data-target="' + target +
      '" async><' + '/script>';
    document.getElementById("widget-code").value = code;
    var preview = document.getElementById("widget-preview");
    preview.replaceChildren();
    previewScript = document.createElement("script");
    previewScript.src = localWidgetUrl;
    previewScript.dataset.locale = locale;
    previewScript.dataset.publisher = publisher;
    previewScript.dataset.method = method;
    previewScript.dataset.target = target;
    preview.appendChild(previewScript);
  }
  document.querySelectorAll("#widget-builder input,#widget-builder select").forEach(function (field) { field.addEventListener("input", render); });
  document.getElementById("copy-widget-code").addEventListener("click", async function () { await navigator.clipboard.writeText(document.getElementById("widget-code").value); });
  render();
})();
