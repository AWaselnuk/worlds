import * as React from 'react';
import { create as randomSeed } from 'random-seed';
import { flatten } from 'lodash';
import Cell from './Cell';
import { valueToType as valueToCellColor } from './CellType';
import { GridData, Grid as GridT } from './GridData';

interface Props {
  seed: string;
  size: number;
}

interface State {}

export default class Grid extends React.PureComponent<Props, State> {
  private seed: string;
  private random: any; // TODO: figure out how to type this
  private data: GridT;

  constructor (props: Props) {
    super(props);

    const { seed, size } = props;
    this.seed = seed;
    this.data = new GridData(seed, size).data;
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

  private static Cell (value: number, index: number): JSX.Element {
    const color = valueToCellColor(value);
    return <Cell key={index} color={color} size={40} value={value} />;
  }
}
