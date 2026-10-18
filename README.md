# picode-whatsapp

A COGNIX[WS] extension: WhatsApp Web in the panel beside your agents, without
an address bar, fitted to the panel's width by itself.

- **What it adds.** A site panel (door F of ADR-0230): WhatsApp Web as a web
  app with its own sign-in, listed under **From extensions** in Open beside,
  and a tile in Apps.
- **The recipe.** `recipe/narrow.css` puts WhatsApp in one column below 960px:
  the chat list with no chat open, the conversation with one open, and the
  other screens (Status, Channels, Communities, Calls, Tools, Settings,
  profile and the media gallery) fitted to the panel's width. A small script,
  `recipe/back.js`, adds the arrow that goes from a conversation back to the
  list. COGNIX[WS] applies both before every page of the app loads, so a
  reload, closing the panel or restarting the app keep them.
- **Your agents.** With the extension on in a workspace, its agents open the
  panel with `tabs new {panel: "whatsapp/web"}` and use it with the browser
  verbs, inside web.whatsapp.com only. An agent that finds a better fix keeps
  it with `adjust save`; you undo it from the tab's menu.
- **What the script does.** It runs in the WhatsApp page and only adds the back
  arrow to a conversation's header (and sends Esc to WhatsApp when you press it).
  It reads no messages, and nothing of your account leaves your computer
  through this extension.

## Install

In COGNIX[WS], Extensions ▸ Add, then this repository's address or folder.
Needs COGNIX[WS] with manifest version 8 and the desktop app.

## Use and WhatsApp's terms

This extension only changes how WhatsApp Web is laid out in your own window.
How you and your agents use your account is governed by
[WhatsApp's Terms of Service](https://www.whatsapp.com/legal/terms-of-service),
which restrict automated and bulk messaging and non-personal use.

## License

Apache-2.0
