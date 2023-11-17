import { Routes, Route } from "react-router-dom";
import Main from "./container/Main";
import Home from "../page/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
