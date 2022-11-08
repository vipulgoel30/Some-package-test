import * as htmlToImage from "html-to-image";

const main = document.querySelector(".main");

htmlToImage
  .toPng(main)
  .then((dataUrl) => {
    console.log(dataUrl);
    // var image = new Image();
    // image.src = dataUrl;
    // document.body.appendChild(image);
    require("downloadjs")(dataUrl, "first.png");
  })
  .catch((error) => {
    console.log(error);
  });
