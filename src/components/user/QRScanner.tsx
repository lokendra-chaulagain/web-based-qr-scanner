import { BrowserMultiFormatReader } from "@zxing/library";
import { useRef, useState } from "react";

export default function QRScanner() {
  const videoRef = useRef<any>(null);
  const [code, setCode] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const startScanning = () => {
    setVisible(true);
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

  const closeScanner = () => {
    setVisible(false);
  };
  console.log(visible);

  return (
    <div>
      <video
        ref={videoRef}
        id="video"
        style={{ width: "100%", maxWidth: 640, display: visible ? "block" : "none" }}
      />
      {code && <p>{code}</p>}

      {!visible && <div className="flex justify-center items-center">
        <p
          onClick={startScanning}
          className=" w-32 cursor-pointer  py-2 px-5 text-base font-medium text-white hover:bg-opacity-90  bg-primary-600 rounded-lg">
          Scan QR
        </p>
      </div>}

      {visible && (
        <div className="flex justify-center items-center mt-4">
          <p
            onClick={closeScanner}
            className=" w-32 cursor-pointer  py-2 px-5 text-base font-medium text-white hover:bg-opacity-90  bg-red-600 rounded-lg">
            Close
          </p>
        </div>
      )}
    </div>
  );
}
