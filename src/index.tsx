import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { CellType } from './CellType';
import { Cell } from './Cell';
import './app.scss';

const App = (props) => {
  return (
    <Cell size={40} type={CellType.Rock} />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
