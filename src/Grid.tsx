import * as React from 'react';
import { create as randomSeed } from 'random-seed';
import { flatten } from 'lodash';
import Cell from './Cell';
import { valueToType as valueToCellColor } from './CellType';

interface Props {
  seed: string;
  size: number;
}

interface State {}

type CellData = number;
type RowData = Array<CellData>;
type GridData = Array<RowData>;

export default class Grid extends React.PureComponent<Props, State> {
  private seed: string;
  private random: any; // TODO: figure out how to type this
  private data: GridData;

  constructor (props: Props) {
    super(props);

    const { seed, size } = props;
    this.seed = seed;
    this.random = randomSeed(seed);
    this.data = this.generateGridData(size);
    console.info(this.data);
  }

  render () {
    return (
      <section className="grid">
        <p>
          Seed: {this.seed}
        </p>
        <div>
          {flatten(this.data).map((value, i) => Grid.Cell(value, i))}
        </div>
      </section>
    );
  }

  private static Cell (value: CellData, index: number): JSX.Element {
    const color = valueToCellColor(value);
    return <Cell key={index} color={color} size={40} value={value} />;
  }

  private generateGridData (size: number): GridData {
    const grid = new Array(size).fill(size);
    return grid.map(this.generateRowData.bind(this));
  }

  private generateRowData (size: number): RowData {
    const row = new Array(size).fill(0);
    return row.map((_) => this.random.range(10));
  }
}
