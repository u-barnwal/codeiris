import { AbstractPureComponent, CommonProps, Position } from '../../common';

export type ToasterPosition = typeof Position.TOP | typeof Position.BOTTOM;
export interface ToasterProps extends CommonProps {
  usePortal?: boolean;
  position?: ToasterPosition;
}
export interface ToasterState {
  toasts: ToasterProps[];
}
export interface Toaster {
  show(props: ToasterProps, key?: string): string;
  dismiss(key: string): void;
  clear(): void;
}

export class Toaster
  extends AbstractPureComponent<ToasterProps, ToasterState>
  implements Toaster {}
