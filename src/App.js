import "./App.css";
import Layout from "./layout/Layout";

import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import UserProviders from "./users/providers/UserProviders";
import CustomThemeProvider from "./providers/CustomThemeProvaider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProviders>
        <CustomThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UserProviders>
    </BrowserRouter>
  );
}

export default App;
