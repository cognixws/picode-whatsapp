// A way back to the chat list when a chat fills a narrow panel (below 960px,
// see narrow.css): a back button at the start of the chat's header. It closes
// the chat the way WhatsApp's own Escape does.
(() => {
  const ID = "picode-wa-back";
  const narrow = matchMedia("(max-width: 959px)");
  const closeChat = () => {
    const ev = { key: "Escape", code: "Escape", keyCode: 27, which: 27, bubbles: true, cancelable: true };
    const target = document.querySelector("#main [contenteditable='true']") || document.activeElement || document.body;
    target.dispatchEvent(new KeyboardEvent("keydown", ev));
  };
  const button = () => {
    const b = document.createElement("button");
    b.id = ID;
    b.type = "button";
    b.title = "Back to chats";
    b.setAttribute("aria-label", "Back to chats");
    b.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
    b.style.cssText = "flex:none;display:flex;align-items:center;justify-content:center;width:40px;height:40px;margin:0 4px 0 -4px;border:0;border-radius:50%;background:transparent;color:inherit;cursor:pointer;";
    b.addEventListener("mouseenter", () => { b.style.background = "rgba(127,127,127,.15)"; });
    b.addEventListener("mouseleave", () => { b.style.background = "transparent"; });
    b.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); closeChat(); });
    return b;
  };
  const sync = () => {
    const header = document.querySelector("#main header");
    const have = document.getElementById(ID);
    if (!narrow.matches || !header) { if (have) have.remove(); return; }
    if (have && have.parentElement === header) return;
    if (have) have.remove();
    header.prepend(button());
  };
  const start = () => {
    sync();
    new MutationObserver(sync).observe(document.body, { childList: true, subtree: true });
    narrow.addEventListener("change", sync);
  };
  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start, { once: true });
})();
