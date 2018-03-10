import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { parse as parseQueryString, stringify as stringifyQueryString } from 'query-string';
import { randomString } from './random-generators';
import Grid from './Grid';
import Frame from './Frame';
import './app.scss';

type seed = string;

interface Props {
  seed: seed;
};

const App = (props: Props) => {
  return (
    <Frame>
      <p>
        Seed: {props.seed}
      </p>
      <Grid seed={seed} size={20} cellSize={60} gap={3} />
    </Frame>
  );
};

function getOrSetSeedFromURL(queryString: string): seed {
  const seedParam = parseQueryString(queryString).seed;
  let { seed } = parseQueryString(queryString);
  if (!seed) {
    seed = randomString(30);
    window.history.replaceState({}, '', '?' + stringifyQueryString({seed}));
  }
  return seed;
}

const seed = getOrSetSeedFromURL(window.location.search);

ReactDOM.render(
  <App seed={seed} />,
  document.getElementById('app')
);
