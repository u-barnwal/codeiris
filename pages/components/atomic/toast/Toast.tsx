import { AbstractPureComponent } from '../../../common';
import { ToastProps } from './ToastProps';

export class Toast extends AbstractPureComponent<ToastProps> {
  public static defaultProps: ToastProps = {
    className: '',
    message: '',
    timeout: 5000,
  };

  render() {
    const { className, icon, intent, message } = this.props;
    return (
      <div className="flex items-center text-white max-w-sm w-full bg-green-400 shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="w-10 border-r px-2">

        </div>

        <div className="flex items-center px-2 py-3">
          <div className="mx-3">
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.startTimeout();
  }

  componentDidUpdate(prevProps: ToastProps) {
    if (prevProps.timeout !== this.props.timeout) {
      if (this.props.timeout! > 0) {
        this.startTimeout();
      } else {
        this.clearTimeouts();
      }
    }
  }

  componentWillUnmount() {
    this.clearTimeouts();
  }

  private triggerDismiss(didTimeoutExpire: boolean) {
    this.clearTimeouts();
    this.props.onDismiss?.(didTimeoutExpire);
  }

  private startTimeout = () => {
    this.clearTimeouts();
    if (this.props.timeout! > 0) {
      this.setTimeout(() => this.triggerDismiss(true), this.props.timeout);
    }
  };
}
