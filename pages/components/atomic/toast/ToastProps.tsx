import {
  ActionProps,
  CommonProps,
  IntentProps,
  MaybeElement,
} from '../../../common';

export interface ToastProps extends CommonProps, IntentProps {
  action?: ActionProps;
  icon?: MaybeElement;
  message: React.ReactNode;
  onDismiss?: (timeoutExpired: boolean) => void;
  timeout?: number;
}
