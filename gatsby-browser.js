import "./src/styles/global.scss"

const $ = require("jQuery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
    console.log("The answer is don't think about it!")
  });
}