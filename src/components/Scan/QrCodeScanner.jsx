import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { SCAN_DATA } from "../../constants.js";
import styles from "./qrCodeScanner.module.css";


const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const scanHandler = (result) => {
		setScanned(result[0].rawValue);

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
		
		localStorage.setItem(SCAN_DATA, JSON.stringify([result[0].rawValue]));

		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify([...prevData, result[0].rawValue])
		);
	};
	console.log(SCAN_DATA)

  const settings = {
    audio: false,
    finder: false,
  };

  return (
    <div className={styles.container}>
      <Scanner
        onScan={scanHandler}
        components={settings}
        styles={{
          container: {
            backgroundColor: "#fff",
            border: "2px solid #8263DE",
            width: "200px",
            height: "200px",
          },
        }}
			/>
			<p className={styles.text}>{scanned}</p>
    </div>
  );
};

export default QrCodeScanner;
