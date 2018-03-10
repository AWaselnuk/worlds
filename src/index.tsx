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
      <Frame.Sidebar>
        <p className="text-bold">Seed</p>
        <p>{props.seed}</p>
      </Frame.Sidebar>

      <Frame.Content>
        <Grid seed={seed} size={20} cellSize={60} gap={3} />
      </Frame.Content>
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
