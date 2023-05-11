// import { BrowserMultiFormatReader } from "@zxing/library";
// import { useEffect, useRef, useState } from "react";

// export default function QRScanner() {
//   const videoRef = useRef<any>(null);
//   // const [code, setCode] = useState(null);
//   const [code, setCode] = useState<string | null>(null);

//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     codeReader.decodeFromVideoDevice(null, videoRef.current?.id, (result, err) => {
//       if (result) {
//         // setCode(result.text);
//         setCode(result.getText());
//       }
//       if (err) {
//         console.error(err);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <video
//         ref={videoRef}
//         id="video"
//         style={{ width: "100%", maxWidth: 640 }}
//       />
//       {code && <p>{code}</p>}
//     </div>
//   );
// }

import { BrowserMultiFormatReader } from "@zxing/library";
import { useRef, useState } from "react";

export default function QRScanner() {
  const videoRef = useRef<any>(null);
  const [code, setCode] = useState<string | null>(null);

  const startScanning = () => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromVideoDevice(null, videoRef.current?.id, (result, err) => {
      if (result) {
        setCode(result.getText());
      }
      if (err) {
        console.error(err);
      }
    });
  };

  return (
    <div>
      <video
        ref={videoRef}
        id="video"
        style={{ width: "100%", maxWidth: 640 }}
      />
      {code && <p>{code}</p>}
      <div className="flex justify-center items-center">
      <p
        onClick={startScanning}
        className=" w-32 cursor-pointer  py-2 px-5 text-base font-medium text-white hover:bg-opacity-90  bg-primary-600 rounded-lg">
      Scan QR
      </p>
      </div>
    </div>
  );
}
