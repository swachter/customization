/**
 * Transforms a union type (`A | B`) into an intersection type (`A & B`).
 *
 * @see https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type/50375286#50375286
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * Checks if the given type is a union type.
 *
 * @see https://stackoverflow.com/questions/53953814/typescript-check-if-a-type-is-a-union/53955431#53955431
 */
export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

export type Resolve<T> = T extends (...args: any[]) => any ? T : { [k in keyof T]: T[k] };
