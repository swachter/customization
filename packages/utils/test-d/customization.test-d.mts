import {Customization} from "customization.mjs";

// test type derivation
// -> https://effectivetypescript.com/2022/05/28/eslint-plugin-expect-type/

const x1: Customization<{}, { x: number }> = {} as any;
//    ^? const x1: {
//           x: number;
//       }

const x2: Customization<{}, { x?: number }> = {} as any;
//    ^? const x2: {
//           x?: number | undefined;
//       }

void x1, x2