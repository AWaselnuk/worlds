import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { parse as parseQueryString } from 'query-string';
import Grid from './Grid';
import Frame from './Frame';
import './app.scss';

interface Props {};

const App = (props: Props) => {
  const seed = parseQueryString(location.search).seed || 'Ateam';

  return (
    <Frame>
      <p>
        Seed: {seed}
      </p>
      <Grid seed={seed} size={20} cellSize={60} gap={3} />
    </Frame>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
