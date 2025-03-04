import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/layout";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        {/* <Login /> */}
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
