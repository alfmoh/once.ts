export function once(fn: Function): any {
  let called: boolean = false,
    result: any;
  return function func(...args: any): any {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, args);
    fn = null;
    return result;
  };
}
