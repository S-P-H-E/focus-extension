# Focus Extension

![Focus Banner](https://i.ibb.co/Kxp2NjdM/focus-banner.png)

## 📜 Description

A simple Chrome extension to block distractions on YouTube and help you stay focused.

## 🔧 Features

- Hides:
  - Related videos
  - Comments section
  - YouTube Shorts
  - Sidebar sections like "Explore", "Subscriptions", etc.
  - Notification button
  - Other distracting guide entries

## 📁 Files

- `manifest.json` – Extension configuration
- `content.js` – Hides YouTube elements using DOM manipulation
- `popup.html` / `popup.js` – (Optional) UI for toggling the focus mode

## 🚀 How to Use

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the folder containing the extension files
5. Open YouTube — distractions will be hidden automatically

## 💡 Note

This extension runs every second (`setInterval`) to continuously hide elements. You can tweak or improve it as needed.

## 📜 License

MIT License
