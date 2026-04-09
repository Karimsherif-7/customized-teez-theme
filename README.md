# 🛍️ Customized Teez — Shopify Theme

> A fully custom Shopify theme built from scratch for **Customized Teez**, a Louisville, KY-based custom streetwear brand. This project demonstrates end-to-end e-commerce front-end development using Shopify's Liquid templating engine.

[![Shopify](https://img.shields.io/badge/Platform-Shopify-96BF48?style=for-the-badge&logo=shopify&logoColor=white)](https://shopify.com)
[![Liquid](https://img.shields.io/badge/Language-Liquid-68b8f2?style=for-the-badge)](https://shopify.dev/docs/api/liquid)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 📋 Project Overview

Customized Teez is a real Louisville, KY streetwear brand that allows customers to order custom-printed apparel. This repository contains the complete Shopify storefront theme, developed to reflect the brand's dark, urban streetwear aesthetic.

**Key highlights:**
- Built as a real production-ready Shopify theme for an active business
- Custom homepage design with brand-specific dark color scheme and #E8FF00 accent color
- Fully responsive layout for mobile, tablet, and desktop shoppers
- Custom Liquid sections and templates tailored to the brand's product catalog

---

## ✨ Features

- **Custom Homepage Layout** — Bespoke hero section, featured products, and brand storytelling sections
- **Brand Color System** — Dark background with electric yellow (#E8FF00) accent color throughout
- **Responsive Design** — Mobile-first approach ensuring seamless shopping on all devices
- **Custom Liquid Sections** — Modular, reusable components following Shopify theme best practices
- **Optimized Assets** — Structured asset pipeline with custom JavaScript and CSS
- **Product Templates** — Custom product page layouts with streamlined checkout flow

---

## 🗂️ Project Structure

```
customized-teez-theme/
├── assets/          # CSS, JS, images, fonts
├── config/          # Theme settings & brand color configuration
│   └── settings_data.json  # Brand colors, typography, layout settings
├── layout/          # Master theme layout
│   └── theme.liquid # Root HTML structure, header, footer
├── sections/        # Modular homepage & page sections
│   └── customized-teez-homepage.liquid
├── templates/       # Page-type templates (product, collection, etc.)
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Shopify Liquid** | Templating engine for dynamic content |
| **JavaScript** | Interactive UI components |
| **CSS3** | Custom styling & animations |
| **JSON (settings_data.json)** | Theme configuration & brand settings |

---

## 🎨 Design System

- **Background:** Dark/near-black (#0a0a0a)
- **Accent Color:** Electric Yellow (#E8FF00)
- **Typography:** Bold, streetwear-inspired font choices
- **Style:** Urban, minimal, high-contrast

---

## 🚀 Getting Started

To run this theme locally using the Shopify CLI:

```bash
# Clone the repository
git clone https://github.com/Karimsherif-7/customized-teez-theme.git
cd customized-teez-theme

# Install Shopify CLI (if not already installed)
npm install -g @shopify/cli @shopify/theme

# Log in to your Shopify store
shopify auth login --store YOUR_STORE_NAME.myshopify.com

# Start the local dev server
shopify theme dev
```

---

## 📌 About the Business

**Customized Teez** is a real custom streetwear brand based in Louisville, Kentucky. The store offers custom-printed t-shirts, hoodies, and apparel for individuals and organizations.

---

## 👨‍💻 Developer

**Karim Sherif** — CS Student at University of Louisville  
📧 Karimsherif2026@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/karimsherif7) | [GitHub](https://github.com/Karimsherif-7)
