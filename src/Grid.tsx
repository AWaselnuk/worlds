import * as React from 'react';

interface GridProps {
  size: number;
}

type CellData = number;
type RowData = Array<CellData>;
type GridData = Array<RowData>;

export function Grid (props: GridProps) {
  const { size } = props;
  const cells = generateGridData(size);

  return (
    <pre><code>
{JSON.stringify(cells, null, 2)}
    </code></pre>
  );
}

function generateGridData (size: number): GridData {
  const grid = new Array(size).fill(size);
  return grid.map(generateRowData);
}

function generateRowData (size: number): RowData {
  const row = new Array(size).fill(0);
  return row.map((_) => Math.random());
}
