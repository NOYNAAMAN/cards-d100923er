import { Routes, Route } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import ROUTES from "./routerModel";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/Counter";
import MyBoxColor from "../sandbox/MyBoxColor";
import MyBoxSize from "../sandbox/other/MyBoxSize";
import Component from "../sandbox/other/Component";
import LifeCycle from "../sandbox/LifeCycle";
import Countries from "../sandbox/countries/Countries";
import FormExample from "../sandbox/FormExample";

import ResizeWindow from "../sandbox/ResizeWindow";
import Login from "../sandbox/Login";
import SignUp from "../sandbox/SignUp";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import ParentComponent from "../sandbox/optimization/ParentComponent";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="BOX" element={<MyBoxColor />} />
        <Route path="life" element={<LifeCycle />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<FormExample />} />
        <Route path="resize" element={<ResizeWindow />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="optimization" element={<ParentComponent />} />
      </Route>
      <Route path={ROUTES.ADD} element={<Component />}>
        <Route path="myboxsize" element={<MyBoxSize />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}