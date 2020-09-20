const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  sassOptions: {
    prependData: `
        @import './styles/colors.scss';
    `,
  },
});
