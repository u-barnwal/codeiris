export interface Type<T> extends Function {
  // tslint:disable-next-line:callable-types
  new (...args: any[]): T;
}
