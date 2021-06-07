import styled from "@emotion/styled";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login } from "./api";
import CodeAccesPage from "./pages/code.acces.page";
import ConnexionPage from "./pages/connexion.page";
import DashboardPage from "./pages/dashboard.page";
import InscriptionPage from "./pages/inscription.page";
import PasswordPage from "./pages/password.page";

const client = new QueryClient();

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    max-width: 50ch;
  }
`;

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/connexion" exact component={ConnexionPage} />
          <Route path="/inscription" exact component={InscriptionPage} />
          <Route path="/password" exact component={PasswordPage} />
          <Route path="/code-acces" exact component={CodeAccesPage} />
          <Route path="/password" exact component={PasswordPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
