!function(){var t={bodyColor:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},o=null;t.btnStart.addEventListener("click",(function(){o=setInterval((function(){t.bodyColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearInterval(o),t.bodyColor.style.backgroundColor="#fff",t.btnStart.disabled=!1,t.btnStop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.1962caa4.js.map
