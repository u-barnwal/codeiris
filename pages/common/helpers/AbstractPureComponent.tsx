import React from 'react';

export abstract class AbstractPureComponent<
  P,
  // eslint-disable-next-line @typescript-eslint/ban-types
  S = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  SS = {}
> extends React.PureComponent<P, S, SS> {
  public componentDidMount: never;
  public getDerivedStateFromProps: never;

  protected constructor(props: P, context?: any) {
    super(props, context);
  }

  private timeoutIds: number[] = [];

  private requestIds: number[] = [];

  public componentWillUnmount() {
    this.clearTimeouts();
  }

  public clearTimeouts = () => {
    if (this.timeoutIds.length > 0) {
      for (const timeoutId of this.timeoutIds) {
        window.clearTimeout(timeoutId);
      }
      this.timeoutIds = [];
    }
  };
}
