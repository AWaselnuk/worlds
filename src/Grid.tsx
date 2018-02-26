import * as React from 'react';
import { flatten } from 'lodash';
import Cell, { Props as CellProps } from './Cell';
import GridData, { Grid as GridT } from './GridData';

interface Props {
  seed: string;
  size: number;
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
    const { seed } = this.props;

    return (
      <section className="grid">
        {flatten(this.data).map((value, i) => Grid.Cell(value, i))}
      </section>
    );
  }

  private static Cell (value: CellProps['value'], index: number): JSX.Element {
    return <Cell key={index} size={40} value={value} />;
  }
}
