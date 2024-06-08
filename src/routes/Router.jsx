import { Routes, Route } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import ROUTES from "./routerModel";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import AddCardPage from "../cards/pages/AddCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavoriteCards from "../cards/pages/FavoriteCards";
import MyCards from "../cards/pages/MyCards";
import ProfilePage from "../cards/pages/ProfilePage";
import UpdateUserPage from "../users/pages/UpdateUserPage";
import SearchMenu from "../layout/header/topNavBar/rightnavigation/SearchMenu";

import AdminPage from "../users/admin/AdminPage/AdminPage";
import { getUser } from "../users/services/userService";

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
      <Route path={ROUTES.EDIT_ACCOUNT} element={<UpdateUserPage />} />

      {user && user.isAdmin ? (
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
      ) : (
        <Route path={ROUTES.CARDS} element={<CardsPage />} />
      )}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
