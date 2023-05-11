// import React, { useRef, useState } from 'react';

// const BarcodeScanner = () => {
//   const videoRef = useRef(null);
//   const [scannedBarcode, setScannedBarcode] = useState(null);

//   const handleBarcodeDetection = async (event: { target: any; }) => {
//     const barcodeDetector = new BarcodeDetector();
//     const barcodes = await barcodeDetector.detect(event.target);
//     if (barcodes.length > 0) {
//       setScannedBarcode(barcodes[0].rawValue);
//     }
//   };

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const stopCamera = () => {
//     const stream = videoRef.current.srcObject;
//     if (stream) {
//       const tracks = stream.getTracks();
//       tracks.forEach((track: { stop: () => any; }) => track.stop());
//     }
//   };

//   return (
//     <div>
//       {scannedBarcode && <p>Scanned barcode: {scannedBarcode}</p>}
//       <video ref={videoRef} onPlay={handleBarcodeDetection} />
//       <button className=" w-32 cursor-pointer  py-2 px-5 text-base font-medium text-white hover:bg-opacity-90  bg-primary-600 rounded-lg" onClick={startCamera}>Start camera</button>
//       <button  className=" w-32 cursor-pointer  py-2 px-5 text-base font-medium text-white hover:bg-opacity-90  bg-primary-600 rounded-lg" onClick={stopCamera}>Stop camera</button>
//     </div>
//   );
// };

// export default BarcodeScanner;

import React, { useEffect, useRef } from "react";

export default function BarcodeScanner() {
  let videoRef = useRef<HTMLVideoElement>(null);
  let canvasRef = useRef<HTMLCanvasElement>(null);

  let pairWithServer = () => {};

  let detect = async () => {
    // let canvasElement = canvasRef.current as HTMLCanvasElement
    // canvasElement.getContext('2d')?.drawImage(videoRef.current as HTMLVideoElement, 0, 0, canvasElement.width, canvasElement.height)
    // let image_data_url = canvasElement.toDataURL('image/jpeg');
    {
      /*
     // @ts-ignore */
    }
    let barcodeDetector = new BarcodeDetector({ formats: ["code_39", "codabar", "ean_13", "qr_code"] });

    while (true) {
      {
        /*
       // @ts-ignore */
      }
      let detected = await barcodeDetector.detect(videoRef.current);
      console.log(detected);
      if (detected.length) {
        break;
      }
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      (videoRef.current as HTMLVideoElement).srcObject = stream;
    });
  });

  return (
    <div className="relative h-screen w-screen bg-gray-600">
      <div className="absolute inset-0 h-screen bg-zinc-700 bg-opacity-90 z-10">
        <div className="flex justify-center items-center h-screen">
          <button
            className="p-5 text-lg text-white bg-blue-700"
            onClick={detect}>
            Pair with server
          </button>
        </div>
      </div>
      <video
        className="h-screen w-screen"
        ref={videoRef}
        muted
        autoPlay={true}></video>
      {/* <button onClick={detect}>Scan</button>
    <canvas ref={canvasRef} width="320" height="240"></canvas> */}
    </div>
  );
}
