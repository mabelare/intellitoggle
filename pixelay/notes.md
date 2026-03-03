# Pixelay Comparison Notes

- **Font rendering:** Minor differences in font weight and letter-spacing between the browser and Figma, particularly for custom fonts (DM Sans, Poppins, Plus Jakarta Sans, Satoshi) which render with slight antialiasing variations across platforms.
- **Spacing and alignment:** Small discrepancies (2-4px) in padding, margin, and vertical rhythm where CSS values were approximated from the Figma design, especially at responsive breakpoints that do not match Figma's fixed artboard widths.
- **Asset fidelity:** Exported SVG and PNG assets differ slightly in color profile or resolution from the original Figma vector objects, and some decorative overlay elements (the floating UI cards in the hero section) are only visible at wider viewport sizes (1280px and above).

## Screenshots

- `pixelay-desktop.png` - Desktop overlay comparison at 50% opacity (transparent overlay mode)
- `pixelay-mobile.png` - Not generated. Pixelay didn't work reliably all the time.
