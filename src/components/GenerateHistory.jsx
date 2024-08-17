import { GENERATE_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
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

export default GenerateHistory;
