import { BrowserMultiFormatReader } from "@zxing/library";
import { useEffect, useRef, useState } from "react";

export default function QRScanner() {
  const videoRef = useRef<any>(null);
  // const [code, setCode] = useState(null);
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromVideoDevice(null, videoRef.current?.id, (result, err) => {
      if (result) {
        // setCode(result.text);
        setCode(result.getText());
      }
      if (err) {
        console.error(err);
      }
    });
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        id="video"
        style={{ width: "100%", maxWidth: 640 }}
      />
      {code && <p>{code}</p>}
    </div>
  );
}
