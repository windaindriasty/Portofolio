Non-destructive usage instructions for `custom.css`

How to apply these styles without changing your existing files:

1) Link in `index.HTML` (non-destructive — add this line AFTER your existing stylesheet link):

   <link rel="stylesheet" href="custom.css">

   Placing it after `styles.css` ensures `custom.css` can override or enhance styles.

2) Or inject at runtime using browser console (no file edits):

   // Paste this in the page console to inject the stylesheet temporarily
   const l = document.createElement('link');
   l.rel = 'stylesheet';
   l.href = 'custom.css';
   document.head.appendChild(l);

3) If you prefer a permanent, non-destructive approach but don't want to edit `index.HTML`, you can serve the site with a build step that concatenates/loads the extra stylesheet, or use browser extensions (e.g., "User CSS") to apply `custom.css` locally.

Notes:
- I did NOT modify `index.HTML` or `style.CSS`.
- Tell me if you want me to create `custom.css` with different colors or more components (cards, grid, animations).