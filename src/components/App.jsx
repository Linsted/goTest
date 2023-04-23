import { Routes, Route,Navigate } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";


const Tweets = lazy(() => import("../pages/Tweets"));
const Home = lazy(() => import("../pages/Home"));



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
};
