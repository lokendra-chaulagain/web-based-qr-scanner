import { useEffect } from "react";

export default function BarcodeScanner() {
  useEffect(() => {
    // check compatibility
    if (!("BarcodeDetector" in window)) {
      console.log("Barcode Detector is not supported by this browser.");
    } else {
      console.log("Barcode Detector supported!");

      // // create new detector
      // const barcodeDetector = new BarcodeDetector({
      //   formats: ["code_39", "codabar", "ean_13"],
      // });
    }
  }, []);

  return <div>ssssss</div>;
}
