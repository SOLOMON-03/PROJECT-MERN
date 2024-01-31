import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Users/pages/Home";
import NewPlace from "./Places/pages/NewPlace";
import Header from "./Users/components/Header";
import UserPlace from "./Places/pages/UserPlace";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
