import { IsUnion, Resolve } from './type-utils.mjs';

/**
 * Determines the keys in `To` that need customization.
 *
 * A key in `To` needs customization if
 *
 * 1. it is a key of `From` but `From[k]` is not a subtype of `To[k]`, or
 * 2. it is not a key of `From` and it may not be `undefined`
 */
export type NeededKeys<From, To> = {
    [k in keyof To]-?: k extends keyof From ? (From[k] extends To[k] ? never : k) : undefined extends To[k] ? never : k;
}[keyof To];

export type ExtraKeys<From, To> = Exclude<keyof To, NeededKeys<From, To>>;

/**
 * Calculates the type of customization values.
 *
 * A base value of type `From` is customized into a value of type `To` by deeply merging a value of type
 * `Customization<From, To>` into the base value.
 *
 * Properties of the customization type are required if they are among the {@link NeededKeys}. These properties
 * must have the types in the `To` type.
 *
 * Properties that belong to the {@link ExtraKeys} are optional. If an extra property is included in the `From` type
 * then it can be a customization of that value. Otherwise, it must have the type of that property in the `To` type.
 *
 * In general, a customization is a partial value, i.e. not all properties need to be defined.
 * However, some parts of a customizations must be completely defined:
 *
 * - array items (because arrays get replaced and not merged)
 * - properties that are optional or missing in the `From` type
 * - properties that have a union type (it is not clear which alternative is present in value of the `From` type)
 */
export type Customization<From, To = From> =
    IsUnion<To> extends true
        ? To
        : To extends ReadonlyArray<infer T1>
          ? ReadonlyArray<T1>
          : To extends object
            ? Resolve<
                  {
                      [k in NeededKeys<From, To>]-?: To[k];
                  } & {
                      [k in ExtraKeys<From, To>]?: k extends keyof From ? Customization<From[k], To[k]> : To[k];
                  }
              >
            : To;
