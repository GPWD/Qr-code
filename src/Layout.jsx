import { Routes, Route } from "react-router-dom";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import Navigation from "./components/Navigation/Navigation";
import GenerateHistory from "./components/GenerateHistory";
import ScanHistory from "./ScanHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
				<Route path="/scan" element={<QrCodeScanner />} />
				<Route path="/scanHistory" element={<ScanHistory />} />
				<Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
