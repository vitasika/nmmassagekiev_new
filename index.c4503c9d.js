!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),a=document.querySelector("[data-menu-closed]");e.addEventListener("click",(function(){var a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")})),a.addEventListener("click",(function(){var a=!1===e.getAttribute("aria-expanded")||"true";e.classList.remove("is-open"),e.setAttribute("aria-expanded",!a),t.classList.remove("is-open"),document.body.classList.remove("modal-open")}))}();
//# sourceMappingURL=index.c4503c9d.js.map
