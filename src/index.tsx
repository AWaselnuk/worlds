import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Grid from './Grid';
import Frame from './Frame';
import './app.scss';

interface Props {};

const App = (props: Props) => {
  const seed = 'Ateam';

  return (
    <Frame>
      <p>
        Seed: {seed}
      </p>
      <Grid seed={seed} size={20} />
    </Frame>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
