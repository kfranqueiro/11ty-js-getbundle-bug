export const data = {
  layout: "layout.html",
};

export const render = function () {
  return "<p>Hello, JS</p>";
};

export const bundle = {
  css: {
    default: `.js { color: yellow; }`,
    defer: `.js-defer { color: yellow; }`,
  },
};
