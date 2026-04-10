# Customized Teez - Shopify Theme

> Custom Shopify storefront for **Customized Teez**, a print-on-demand streetwear shop based in Louisville, KY (Jefferson Mall).

Live store: [customizedteez0.myshopify.com](https://customizedteez0.myshopify.com)

---

## Project Overview

Customized Teez is a custom apparel business offering on-demand printed streetwear. This repository contains the fully customized Shopify theme built on top of the **Rebel** base theme, modified and extended with custom sections, styling, and logic for the store's specific needs.

The theme was configured, customized, and maintained entirely by Karim Abdelfattah as part of building and managing the store end-to-end.

---

## What Was Built and Customized

### Custom Homepage Sections

**`sections/customized-teez-homepage.liquid`** - The primary custom section containing:

- **Hero image block** with branded "New Drop" badge and "SS25" season label
- **Full Catalog list** displaying all products with tag pills, pricing, and navigation arrows
- Fully responsive layout with custom mobile breakpoints (`@media max-width: 960px`)
- Mobile-specific fixes for: image overflow, badge alignment, product row wrapping, tag pill overlap

### Store Configuration

- **Product catalog:** Custom Classic Tee, Oversized Tee, and additional apparel variants
- **Variant management:** All 11 apparel products configured with compare-at pricing for sale display
- **Inventory:** Configured print-on-demand variants with inventory tracking disabled
- **Collections:** All Products collection populated and linked to homepage catalog
- **SEO:** Custom meta titles and descriptions set across all product pages
- **URL structure:** Product handles corrected with 301 redirects preserved

### Theme Styling

- Gold and cream color palette (`#C9A84C` accent on white backgrounds)
- SS25 drop framing and branding
- Custom CSS overrides layered on the Rebel base theme

---

## Tech Stack

| Layer | Technology |
|---|---|
| Platform | Shopify |
| Theme language | Liquid (Shopify templating) |
| Styling | CSS with Shopify theme variables |
| Base theme | Rebel (customized as "Customized Tees") |
| Management | Shopify MCP + zip upload/download workflow |

---

## Repository Structure

This repo contains the exported Shopify theme. Key files:

```
customized-teez-theme/
|
|-- assets/              # CSS, JS, SVG, and image assets
|-- config/              # Theme settings and schema (settings_data.json)
|-- layout/              # theme.liquid - main layout wrapper
|-- sections/            # Shopify sections (modular page components)
|   |-- customized-teez-homepage.liquid   # Custom homepage section
|   |-- header.liquid
|   |-- footer.liquid
|   |-- ... (other Rebel base sections)
|-- snippets/            # Reusable Liquid snippets
|-- templates/           # Page, product, collection, cart templates
|-- locales/             # Translation strings
|
|-- README.md
```

---

## Notable Technical Details

**Dual I2C bus approach (Liquid templating):** Custom sections use Shopify's section schema to expose settings in the theme customizer, allowing non-technical staff to update content without touching code.

**Mobile layout fixes:** The homepage section includes targeted responsive CSS fixes for the Full Catalog list (row wrapping, tag pill z-index, arrow clipping) and the hero block (overflow containment, badge positioning). These were diagnosed and patched directly in the Liquid section file.

**Offline-first product management:** All product variant data, compare-at prices, and collection assignments were managed programmatically via the Shopify MCP API rather than manually through the admin UI, enabling bulk updates across all 11 products in a single session.

---

## Deployment

Theme updates are deployed via zip upload in Shopify Admin:

1. Download current theme as `.zip` from Online Store > Themes > Actions > Download
2. Make edits locally or via MCP
3. Upload updated `.zip` via Online Store > Themes > Add theme > Upload zip file
4. Preview and publish

---

## Author

**Karim Abdelfattah**
Dual-Degree Student, Computer and Communication Engineering
University of Louisville (J.B. Speed School) + Alexandria University

[LinkedIn](https://www.linkedin.com/in/karimabdelfattah7) | [GitHub](https://github.com/Karimsherif-7)
