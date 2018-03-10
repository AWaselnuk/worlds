import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { parse as parseQueryString, stringify as stringifyQueryString } from 'query-string';
import { randomString } from './random-generators';
import Grid from './Grid';
import Frame from './Frame';
import './app.scss';

type seed = string;

interface Props {};

interface State {
  seed: seed;
}

class App extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
    this.state = {
      seed: getSeedFromURL(window.location.search)
    };

    this.updateGrid = this.updateGrid.bind(this);
    this.updateURL = this.updateURL.bind(this);
  }

  render () {
    const { seed } = this.state;

    return (
      <Frame>
        <Frame.Sidebar>
          <p className="text-bold">Seed</p>
          <p>{seed}</p>

          <button className="btn" onClick={this.updateGrid}>Generate</button>
        </Frame.Sidebar>

        <Frame.Content>
          <Grid seed={seed} size={25} cellSize={40} gap={3} />
        </Frame.Content>
      </Frame>
    );
  }

  updateGrid () {
    this.setState(
      {seed: randomString(30)},
      this.updateURL
    );
  }

  updateURL () {
    const { seed } = this.state;
    window.history.replaceState({}, '', '?' + stringifyQueryString({seed}));
  }
};

function getSeedFromURL(queryString: string): seed {
  const seedParam = parseQueryString(queryString).seed;
  const { seed } = parseQueryString(queryString);

  return seed || randomString(30);
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
