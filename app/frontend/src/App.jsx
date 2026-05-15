import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Collabs from "./pages/Collabs";
import Profile from "./pages/Profile";
import AdminInquiries from "./pages/AdminInquiries";
import DesignSystem from "./design-system/DesignSystem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminInquiries />} />
          <Route path="/admin/inquiries" element={<AdminInquiries />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
