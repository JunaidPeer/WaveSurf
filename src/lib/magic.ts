import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

// Create client-side Magic instance
const createMagic = (key: string | undefined) => {
  return typeof window !== "undefined" && key
    ? new Magic(key, {
        extensions: [new OAuthExtension()],
      })
    : null;
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

// import { Magic } from "magic-sdk";
// import { OAuthExtension } from "@magic-ext/oauth";

// // export const magic = new Magic("pk_live_EBBDDE7380155E3E", {
// //   network: {
// //     rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",

// //     chainId: 11155111,
// //   },
// // });

// let magic;

// if (typeof window !== "undefined") {
//   //const { Magic } = import("magic-sdk");
//   magic = new Magic("pk_live_EBBDDE7380155E3E", {
//     extensions: [new OAuthExtension()],
//   });
// }

// export { magic };
