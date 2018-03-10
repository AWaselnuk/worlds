import * as React from 'react';

interface Props {
  children?: React.ReactNode
};

interface State {}

export default class Frame extends React.PureComponent<Props, State> {
  render () {
    return (
      <section className="frame">
        {this.props.children}
      </section>
    );
  }

  static Sidebar (props: Props): JSX.Element {
    return (
      <section className="frame-sidebar">
        {props.children}
      </section>
    )
  }

  static Content (props: Props): JSX.Element {
    return (
      <section className="frame-content">
        {props.children}
      </section>
    )
  }
}
