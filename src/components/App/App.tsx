import React from 'react';
import MainPage from '../MainPage/MainPage';

type AppProps = {
  offersCount: number;
};

const App: React.FC<AppProps> = ({ offersCount }) => (
  <MainPage offersCount={offersCount} />
);

export default App;
