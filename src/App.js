import "./App.css";
import Layout from "./layout/Layout";

import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import UserProviders from "./users/providers/UserProviders";
import CustomThemeProvider from "./providers/CustomThemeProvaider";
import SnackbarProvider from "./providers/SnackbarProvider";
import { PopupProvider } from "./providers/PopupProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProviders>
        <CustomThemeProvider>
          <SnackbarProvider>
            <PopupProvider>
              <Layout>
                <Router />
              </Layout>
            </PopupProvider>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UserProviders>
    </BrowserRouter>
  );
}

export default App;
