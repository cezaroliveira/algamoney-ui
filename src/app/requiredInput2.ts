// https://stackoverflow.com/questions/35528395/make-directive-input-required
export function Required(target: object, propertyKey: string): void {
  console.log('resultado', target, propertyKey);

  Object.defineProperty(target, propertyKey, {
    get(): void {
      throw new Error(`Attribute ${propertyKey} is required`);
    },
    set(value: any): void {
      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
        configurable: true,
      });
    },
  });
}
