import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Users/pages/Home";
import NewPlace from "./Places/pages/NewPlace";
import Header from "./Users/components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/new" element={<NewPlace />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
