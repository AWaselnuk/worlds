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
  render () {
    const { seed, size, gap, cellSize } = this.props;
    const { data } = new GridData(seed, size);

    const style = {
      gridGap: gap,
      gridTemplateColumns: `repeat(${size}, ${cellSize}px)`
    }

    return (
      <section className="grid" style={style}>
        {flatten(data).map((value, i) => Grid.Cell(value, cellSize, i))}
      </section>
    );
  }

  private static Cell (value: CellProps['value'], cellSize: number = 40, index: number): JSX.Element {
    return <Cell key={index} size={cellSize} value={value} />;
  }
}
