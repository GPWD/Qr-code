import { SCAN_DATA } from "./constants.js";
import { QRCodeSVG } from "qrcode.react";

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

  return (
		<div>
			{data.map((text) => (
				<p key={text}>
					{text}
					<QRCodeSVG value={text} size={200}></QRCodeSVG>
				</p>
			))}
    </div>
  );
};

export default ScanHistory;
