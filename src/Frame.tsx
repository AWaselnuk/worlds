import * as React from 'react';

interface Props {};

export default function Frame (props: Props) {
  return (
    <section className="frame">
      {props.children}
    </section>
  )
}