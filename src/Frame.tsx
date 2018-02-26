import * as React from 'react';

interface Props {
  children: any
};

export default function Frame (props: Props) {
  return (
    <section className="frame">
      {props.children}
    </section>
  )
}
