import { Route, Routes } from "react-router-dom";
import { MultiStepForm } from "./pages";
import AntDPage from "./pages/AntD";

function App() {
  return (
    <Routes>
      <Route path="/mui" element={<MultiStepForm />} />
      <Route path="/ant/*" element={<AntDPage />} />
      <Route path="/" element={<div>Home Page</div>} />
    </Routes>
  );
}

export default App;
