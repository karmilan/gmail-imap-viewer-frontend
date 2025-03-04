import { Route, Routes } from "react-router-dom";
import Inbox from "../pages/Inbox";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inbox />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
