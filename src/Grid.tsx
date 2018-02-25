import * as React from 'react';
import { create as randomSeed } from 'random-seed';

interface Props {
  seed: string;
  size: number;
}

interface State {}

type CellData = number;
type RowData = Array<CellData>;
type GridData = Array<RowData>;

export default class Grid extends React.PureComponent<Props, State> {
  private random: any; // TODO: figure out how to type this
  private data: GridData;

  constructor (props: Props) {
    super(props);

    const { seed, size } = props;
    this.random = randomSeed(seed);
    this.data = this.generateGridData(size);
  }

  render () {
    return (
      <pre><code>
        {JSON.stringify(this.data, null, 2)}
      </code></pre>
    );
  }

  private generateGridData (size: number): GridData {
    const grid = new Array(size).fill(size);
    return grid.map(this.generateRowData.bind(this));
  }

  private generateRowData (size: number): RowData {
    const row = new Array(size).fill(0);
    return row.map((_) => this.random.range(100));
  }
}
