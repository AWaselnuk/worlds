import * as React from 'react';
import { CellType } from './CellType';

interface CellProps {
  type: CellType;
  size: number;
}

export function Cell (props: CellProps) {
  const { type, size } = props;
  const width = size;
  const height = size;
  const cellStyle = {
    backgroundColor: type,
    width: width,
    height: height,
  };

  return (
    <div style={cellStyle}>

    </div>
  )
}
