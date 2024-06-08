import { Box } from "@mui/material";
import MenuLink from "../../../../routes/components/MenuLink";
import useUsers from "../../../../users/hooks/useUsers";
import { useUser } from "../../../../users/providers/UserProviders";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ROUTES from "../../../../routes/routerModel";

export default function Menu({ isOpen, anchorEl, onClose }) {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          text="About"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {!user && (
          <>
            <MenuLink
              text="Login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              text="Signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}

        {user && (
          <>
            <MenuLink
              text="Profile"
              navigateTo={ROUTES.PROFILE}
              onClick={onClose}
            />
            <MenuLink
              text="Edit Account"
              navigateTo={ROUTES.EDIT_ACCOUNT}
              onClick={onClose}
            />

            <MenuLink
              text="Favorite Cards"
              navigateTo={ROUTES.FAV_CARDS}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}

        {user && (user.isBusiness || user.isAdmin) && (
          <MenuLink
            text="My Cards"
            navigateTo={ROUTES.MY_CARDS}
            onClick={onClose}
            styles={{ display: { xs: "block", md: "none" } }}
          />
        )}
      </Box>
    </MuiMenu>
  );
}
