import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";

import { CookiesPage } from "../../pages/legalPage/cookiesPage";
import { LegalPage } from "../../pages/legalPage/legalPage";
import { PrivacyPage } from "../../pages/legalPage/privacyPage";
import { TermsPage } from "../../pages/legalPage/termsPage";

import { Navbar } from "../navbar/navbar";

import { useScrollToTopEffect, useUpdatePageOGUrlEffect } from "../../effects/appEffects";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  const location: any = useLocation();

  useScrollToTopEffect(location);

  useUpdatePageOGUrlEffect(location);

  return (
    <div id="tickerr-app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LegalPage />
        </Route>
        <Route exact path="/privacy">
          <PrivacyPage />
        </Route>
        <Route exact path="/terms">
          <TermsPage />
        </Route>
        <Route exact path="/cookies">
          <CookiesPage />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  )
}