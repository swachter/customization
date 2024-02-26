import {Customization} from "@monorepo/utils/customization";

// test type derivation

const x1: Customization<{}, { x: number }> = {} as any;
//    ^? const x1: {
//           x: number;
//       }

const x2: Customization<{}, { x?: number }> = {} as any;
//    ^? const x2: {
//           x?: number | undefined;
//       }

void x1, x2
