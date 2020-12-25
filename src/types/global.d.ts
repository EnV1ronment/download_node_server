/**
 * T的所有属性都可以为null
 * Nullable<{a: number, b: string}> === { a: number | null, b: string | null }
 */
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

/**
 * T的所有属性除了K都可以为null
 * NullableOmit<{a: number, b: string, c: string}, 'a' | 'c'> === { a: number, b: string | null, c: string }
 */
type NullableOmit<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? T[P] : T[P] | null
};

/**
 * T的所有属性除了K改为可选
 * PartialOmit<{a: number, b: string, c: string}, 'a' | 'c'> === { a: number, b?: string, c: string }
 */
type PartialOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]?: T[P];
} & {
  [P in K]: T[P];
}
