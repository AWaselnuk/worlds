import * as React from 'react';

export interface Props {
  size: number;
  value: number;
}

export default function Cell (props: Props) {
  const { size, value } = props;
  const width = size;
  const height = size;
  const style = {
    width: width,
    height: height,
    lineHeight: `${height}px`
  };
  const className = `cell cell-${valueToType(value).toLowerCase()}`;

  return (
    <div className={className} style={style}>
      {value}
    </div>
  )
}

enum CellType {
  Rock = 'rock',
  Water = 'water',
  Grass = 'grass'
};

function valueToType(value: number): CellType {
  if (value > 6) {
    return CellType.Rock;
  } else if (value > 2) {
    return CellType.Grass;
  } else {
    return CellType.Water;
  }
}
