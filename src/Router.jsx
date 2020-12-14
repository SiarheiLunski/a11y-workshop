import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';

import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { News } from './pages/News';
import { Catalog } from './pages/Catalog';
import { Tickets } from './pages/Tickets';

const LayoutRoute = ({ children, ...props }) => (
  <Route {...props}>
    <MainLayout>
      {children}
    </MainLayout>
  </Route>
);

export const Router = () => {
  return <BrowserRouter>
    <Switch>
      <LayoutRoute path="/" exact>
        <Home />
      </LayoutRoute>
      <LayoutRoute path="/contact-us" exact>
        <ContactUs />
      </LayoutRoute>
      <LayoutRoute path="/news" exact>
        <News />
      </LayoutRoute>
      <LayoutRoute path="/catalog" exact>
        <Catalog />
      </LayoutRoute>
      <LayoutRoute path="/tickets" exact>
        <Tickets />
      </LayoutRoute>
    </Switch>
  </BrowserRouter>; 
};
