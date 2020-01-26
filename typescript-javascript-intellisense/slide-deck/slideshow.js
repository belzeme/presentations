const { Marpit } = require("@marp-team/marpit");
const path = require("path");
const fs = require("fs");

console.log(Marpit);
const marpit = new Marpit();

const theme = ``;

const filePath = path.join(__dirname, "slideshow.md");
const markdown = fs.readFileSync(path.join(filePath)).toString();

const { html, css } = marpit.render(markdown);

const htmlFile = `
  <!DOCTYPE html>
  <html>
    <body>
      <style>
        ${css}
      </style>
      ${html}
    </body>
  </html>
`;
fs.writeFileSync(path.join(__dirname, "slideshow.html"), htmlFile);
