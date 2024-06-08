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
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import ParentComponent from "../sandbox/optimization/ParentComponent";
import ParentPageComponent from "../sandbox/context/ParentPageComponent";
import AddCardPage from "../cards/pages/AddCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavoriteCards from "../cards/pages/FavoriteCards";
import MyCards from "../cards/pages/MyCards";
import ProfilePage from "../cards/pages/ProfilePage";
import UpdateUserPage from "../users/pages/UpdateUserPage";
import SearchMenu from "../layout/header/topNavBar/rightnavigation/SearchMenu";

import { getUser } from "../users/services/localStorageService";
import AdminPage from "../users/admin/AdminPage/AdminPage";
import Carousel from "../components/Carousel ";

export default function Router() {
  const user = getUser();
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.ROOT} element={<SearchMenu />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<UpdateUserPage />} />
      <Route path={ROUTES.HOME_PAGE} element={<Carousel />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="BOX" element={<MyBoxColor />} />
        <Route path="life" element={<LifeCycle />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<FormExample />} />
        <Route path="resize" element={<ResizeWindow />} />

        <Route path="optimization" element={<ParentComponent />} />
        <Route path="context" element={<ParentPageComponent />} />
      </Route>
      <Route path={ROUTES.ADD} element={<Component />}>
        <Route path="myboxsize" element={<MyBoxSize />} />
      </Route>
      {user && user.isAdmin && (
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
      )}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
