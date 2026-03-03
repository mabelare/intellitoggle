# Pixelay Comparison Notes

## Status

Pixelay could not be used for overlay comparison. The tool failed to start on my machine as it kept popping up GitHub login screen and even after supplying my credentials, it just breaks, so pixel-level overlay screenshots could not be generated. The `pixelay-desktop.png` and `pixelay-mobile.png` files were not created for this reason.

## Expected Visible Differences

- **Font rendering:** Minor differences in font weight and letter-spacing are expected between the browser and Figma, particularly for custom fonts (DM Sans, Poppins, Plus Jakarta Sans, Satoshi) which may render with slight antialiasing variations across platforms.
- **Spacing and alignment:** Small discrepancies (2-4px) in padding, margin, and vertical rhythm may exist where CSS values were approximated from the Figma design, especially at responsive breakpoints that do not match Figma's fixed artboard widths.
- **Asset fidelity:** Exported SVG and PNG assets may differ slightly in color profile or resolution from the original Figma vector objects, and some decorative overlay elements (the floating UI cards in the hero section) are only visible at wider viewport sizes (1280px and above).
