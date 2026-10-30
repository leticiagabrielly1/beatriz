"use strict";
// Saudação e ano seguem o horário do dispositivo do visitante.
const hour = new Date().getHours();
document.querySelector("#greeting").textContent = `${hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite"}, que bom ter você aqui!`;
document.querySelector("#year").textContent = new Date().getFullYear();
// Menu acessível: botão com estado, Escape e fechamento ao navegar.
const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
function setMenu(open) { menu.classList.toggle("open", open); hamburger.setAttribute("aria-expanded", String(open)); hamburger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); }
hamburger.addEventListener("click", () => setMenu(hamburger.getAttribute("aria-expanded") !== "true"));
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", event => { if (event.key === "Escape" && menu.classList.contains("open")) { setMenu(false); hamburger.focus(); } });
window.matchMedia("(min-width: 601px)").addEventListener("change", () => setMenu(false));
// Apenas a preferência visual é armazenada.
const themeButton = document.querySelector("#theme");
function setTheme(dark) { document.body.classList.toggle("dark", dark); themeButton.setAttribute("aria-pressed", String(dark)); themeButton.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro"); themeButton.textContent = dark ? "☀" : "☾"; }
let savedTheme; try { savedTheme = localStorage.getItem("beatriz-theme"); } catch (_) {}
setTheme(savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
themeButton.addEventListener("click", () => { const dark = !document.body.classList.contains("dark"); setTheme(dark); try { localStorage.setItem("beatriz-theme", dark ? "dark" : "light"); } catch (_) {} });
