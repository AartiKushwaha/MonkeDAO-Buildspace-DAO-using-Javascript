import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x4bbDdA420a879482f7f35Dd899Ebf59028A1edf8");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Premium banana",
        description: "This NFT will give you access to MonkeDAO!",
        image: readFileSync("scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();