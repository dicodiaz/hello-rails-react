import React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Greeting from './Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
          <Route path="*" element={<Navigate to="/greeting" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
