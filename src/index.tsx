import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Grid from './Grid';
import './app.scss';

interface AppProps {};

const App = (props: AppProps) => {
  return (
    <Grid seed="Ateam" size={20} />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
