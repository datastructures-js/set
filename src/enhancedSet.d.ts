interface Set<T> {
  add(value: T): Set<T>;
  clear(): void;
  delete(value: T): boolean;
  entries(): Array<[T, T]>;
  forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
  has(value: T): boolean;
  keys(): Array<T>;
  size: number;
}

interface SetConstructor {
  new <T>(): Set<T>;
  new <T>(iterable: Array<T>): Set<T>;
  prototype: Set<any>;
}

declare const Set: SetConstructor;

export class EnhancedSet<T> extends Set<T> {
  constructor(elements?: T[]);
  union(set: Set<T>): EnhancedSet<T>;
  intersect(set: Set<T>): EnhancedSet<T>;
  complement(set: Set<T>): EnhancedSet<T>;
  diff(set: Set<T>): EnhancedSet<T>;
  isSubsetOf(set: Set<T>): boolean;
  isSupersetOf(set: Set<T>): boolean;
  product(set: Set<any>, separator?: string): EnhancedSet<string>;
  power(m: number, separator?: string): EnhancedSet<string>;
  permutations(m: number, separator?: string): EnhancedSet<string>;
  equals(set: Set<T>): boolean;
  filter(cb: (element: T) => boolean): EnhancedSet<T>;
  toArray(): T[];
  clone(): EnhancedSet<T>;
}
