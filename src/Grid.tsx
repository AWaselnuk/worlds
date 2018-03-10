import * as React from 'react';
import { flatten } from 'lodash';
import Cell, { Props as CellProps } from './Cell';
import GridData, { Grid as GridT } from './GridData';

interface Props {
  seed: string;
  size: number;
  gap?: number;
  cellSize?: number;
}

interface State {}

export default class Grid extends React.PureComponent<Props, State> {
  private data: GridT;

  constructor (props: Props) {
    super(props);
    const { seed, size } = props;
    this.data = new GridData(seed, size).data;
    console.info(this.data);
  }

  render () {
    const { seed, size, gap, cellSize } = this.props;

    const style = {
      gridGap: gap,
      gridTemplateColumns: `repeat(${size}, ${cellSize}px)`
    }

    return (
      <section className="grid" style={style}>
        {flatten(this.data).map((value, i) => Grid.Cell(value, cellSize, i))}
      </section>
    );
  }

  private static Cell (value: CellProps['value'], cellSize: number = 40, index: number): JSX.Element {
    return <Cell key={index} size={cellSize} value={value} />;
  }
}
