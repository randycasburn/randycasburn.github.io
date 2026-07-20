# KiteCoach Partner Kit Draft: Sail Fin

This folder contains draft, editable KiteCoach partner materials generated from public website information. Review and approve all wording, branding, links, and assets before sending anything to a school or publishing it.

## Generated files

- `index.html` - password-gated review and approval page
- `preview.html` - editable partner landing page draft
- `poster.html` - printable 8.5 x 11 classroom poster
- `counter-card.html` - printable 8.5 x 11 foldable counter card
- `qr-assets.html` - QR usage sheet
- `assets/qr-code.png` and `assets/qr-code.svg` - QR code for the destination URL
- `assets/qr-code-assets.zip` - downloadable ZIP containing both QR code files
- `assets/school-logo.*` - best detected school logo
- `assets/kitecoach-logo.png` - KiteCoach logo asset
- `assets/colors.json` - approximate colors extracted from the school website or logo

## Source

- Source URL: https://realwatersports.com/
- Destination URL: https://randycasburn.com/kitecoach/sailfinkiteboarding
- Slug: sailfinkiteboarding
- Inferred school name: Sail Fin
- Logo source: https://www.realwatersports.com/cdn/shop/files/logo_white_v12_x220.png?v=1614729749

## Extracted colors

```json
{
  "primary": "#d50000",
  "secondary": "#aa0000",
  "tertiary": "#000000"
}
```

## Print

Open `poster.html`, `counter-card.html`, or `qr-assets.html` in a browser and print to PDF or paper.

Recommended print settings:

- Paper size: Letter / 8.5 x 11
- Margins: None or minimum
- Background graphics: enabled

## Partner review

Open `index.html` to review the draft package.

- Review password: `kitecoach`
- Approval endpoint: `https://app-support-vercel-dnkm89nbq-randycasburns-projects.vercel.app/api/feedback`

The review gate is intentionally lightweight and is not real authentication. The approval endpoint must allow public POST requests from the page location before approval submissions will send successfully.

The review page is intentionally an authorization surface, not a visual proof. It does not display the partner logo or business name before approval.

## Manual edits

- Replace the school logo by overwriting `assets/school-logo.*` and updating the matching image filename in the HTML if the extension changes.
- Change colors by editing the CSS variables near the top of each HTML file or by updating `assets/colors.json` as a reference.
- Confirm the destination URL and QR code before printing.
- Confirm the school name and signature wording before sharing.
