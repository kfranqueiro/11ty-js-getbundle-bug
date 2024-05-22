export function render(props) {
  const { content } = props;
  return `<!DOCTYPE html>
  <html>
    <head>
      <style>${this.getBundle("css")}</style>
      <link rel="stylesheet" href="${this.getBundleFileUrl("css", "defer")}">
    </head>
    <body>
      ${content}
    </body>
  </html>
  `;
}
