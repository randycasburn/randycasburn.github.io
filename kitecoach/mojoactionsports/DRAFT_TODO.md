# KiteCoach Partner Kit Draft: Mojo Actionsports

This folder contains draft, editable KiteCoach partner materials generated from public website information. Review and approve all wording, branding, links, and assets before sending anything to a school or publishing it.

## Generated files

- `index.html` - password-gated review and approval page
- `preview.html` - editable partner landing page draft
- `poster.html` - printable 8.5 x 11 classroom poster
- `foldable-card.html` - printable 8.5 x 11 foldable counter card
- `qr-assets.html` - QR usage sheet
- `assets/qr-code.png` and `assets/qr-code.svg` - QR code for the destination URL
- `assets/README.html` and `assets/README.pdf` - customer-facing support document
- `assets/assets.zip` - downloadable ZIP containing README.pdf, printable PDFs, and both QR code files
- `assets/school-logo.*` - best detected school logo
- `assets/kitecoach-logo.png` - KiteCoach logo asset
- `assets/colors.json` - approximate colors extracted from the school website or logo

## Source

- Source URL: https://mojoactionsports.shop/
- Destination URL: https://randycasburn.com/kitecoach/mojoactionsports
- Slug: mojoactionsports
- Inferred school name: Mojo Actionsports
- Logo source: https://www.mojoactionsports.shop/cdn/shop/files/MOJOLOGO_FB_FEEDAD-1.png?v=1616734796

## Extracted colors

```json
{
  "primary": "#ee9051",
  "secondary": "#856404",
  "tertiary": "#000000"
}
```

## Print

Open `poster.html`, `foldable-card.html`, or `qr-assets.html` in a browser and print to PDF or paper.

Recommended print settings:

- Paper size: Letter / 8.5 x 11
- Margins: None or minimum
- Background graphics: enabled

## Partner review

Open `index.html` to review the draft package.

- Review password: `kitecoach`
- Approval endpoint: `https://support.randycasburn.com/api/feedback`

The review gate is intentionally lightweight and is not real authentication. The approval endpoint must allow public POST requests from the page location before approval submissions will send successfully.

The review page is intentionally an authorization surface, not a visual proof. It does not display the partner logo or business name before approval.

## Manual edits

- Replace the school logo by overwriting `assets/school-logo.*` and updating the matching image filename in the HTML if the extension changes.
- Change colors by editing the CSS variables near the top of each HTML file or by updating `assets/colors.json` as a reference.
- Confirm the destination URL and QR code before printing.
- Confirm the school name and signature wording before sharing.
