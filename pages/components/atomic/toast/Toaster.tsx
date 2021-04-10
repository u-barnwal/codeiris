import ReactDOM from 'react-dom';
import { AbstractPureComponent, Position } from '../../../common';
import { ToastProps } from './ToastProps';
import Overlay from '../overlay';
import { Toast } from './Toast';
import { CommonProps } from 'pages/common/props/CommonProps';

// TODO Toaster is still not ready for SSR usage

export type ToasterPosition = typeof Position.TOP | typeof Position.BOTTOM;
export interface ToasterProps extends CommonProps {
  usePortal?: boolean;
  position?: ToasterPosition;
  maxToasts?: number;
}

export type ToastOptions = ToastProps & { key: string };

export interface ToasterState {
  toasts: ToastOptions[];
}
interface ToasterHelper {
  show(props: ToastProps, key?: string): string;
  dismiss(key: string): void;
  clear(): void;
}

class Toaster
  extends AbstractPureComponent<ToasterProps, ToasterState>
  implements ToasterHelper {
  public static defaultProps: ToasterProps = {
    position: Position.TOP,
    usePortal: false,
  };

  public static create(
    props?: ToasterProps,
    container = window !== undefined ? document.body : null,
  ): Toaster | null {
    if (window !== undefined) {
      const containerElement = document.createElement('div');
      container.appendChild(containerElement);
      return ReactDOM.render<ToasterProps>(
        <Toaster {...props} usePortal={false} />,
        containerElement,
      ) as Toaster;
    } else {
      return null;
    }
  }

  private toastId = 0;

  public state = {
    toasts: [],
  };

  render() {
    return (
      <Overlay>
        {this.state.toasts.map(this.renderToast, this)}
        {this.props.children}
      </Overlay>
    );
  }

  public show(props: ToastProps, key?: string): string {
    if (this.props.maxToasts) {
      this.dismissIfAtLimit();
    }
    const options = this.createToastOptions(props, key);
    if (key === undefined || this.isNewToastKey(key)) {
      this.setState((prevState) => ({
        toasts: [options, ...prevState.toasts],
      }));
    } else {
      this.setState((prevState) => ({
        toasts: prevState.toasts.map((t) => (t.key === key ? options : t)),
      }));
    }
    return options.key;
  }

  private renderToast = (toast: ToastOptions) => {
    return <Toast {...toast} onDismiss={this.getDismissHandler(toast)} />;
  };

  private getDismissHandler = (toast: ToastOptions) => (
    timeoutExpired: boolean,
  ) => {
    this.dismiss(toast.key, timeoutExpired);
  };

  private isNewToastKey(key: string) {
    return this.state.toasts.every((toast) => toast.key !== key);
  }

  clear() {
    this.state.toasts.forEach((t) => t.onDismiss?.(false));
    this.setState({ toasts: [] });
  }

  public dismiss(key: string, timeoutExpired = false) {
    this.setState(({ toasts }) => ({
      toasts: toasts.filter((t) => {
        const matchesKey = t.key === key;
        if (matchesKey) {
          t.onDismiss?.(timeoutExpired);
        }
        return !matchesKey;
      }),
    }));
  }

  private createToastOptions(
    props: ToastProps,
    key = `toast-${this.toastId++}`,
  ) {
    return { ...props, key };
  }

  private dismissIfAtLimit() {
    if (this.state.toasts.length === this.props.maxToasts) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.dismiss(this.state.toasts[this.state.toasts.length - 1].key!);
    }
  }
}

export default Toaster;
