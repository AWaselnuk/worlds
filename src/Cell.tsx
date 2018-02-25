import * as React from 'react';

interface Props {
  color: string;
  size: number;
  value?: number;
}

export default function Cell (props: Props) {
  const { color, size, value } = props;
  const width = size;
  const height = size;
  const cellStyle = {
    backgroundColor: color,
    width: width,
    height: height,
    lineHeight: `${height}px`
  };

  return (
    <div className='cell' style={cellStyle}>
      {value}
    </div>
  )
}
