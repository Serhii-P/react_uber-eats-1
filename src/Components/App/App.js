import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RestaurantsListPage } from '../RestaurantsListPage';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { RestaurantPage } from '../RestaurantPage';
import { ModalWindow } from '../ModalWindow';

export const App = ({ isOpenedModalWindow }) => (
  <>
    <Header />
    <main className="page">
      <Route
        path="/:id"
        component={RestaurantPage}
      />
      <div className="content">
        <Route
          exact
          path="/"
          component={RestaurantsListPage}
        />
      </div>
    </main>
    <Footer />
    {
      isOpenedModalWindow && (
        <ModalWindow />
      )
    }
  </>
);

App.propTypes = {
  isOpenedModalWindow: PropTypes.bool.isRequired,
};
