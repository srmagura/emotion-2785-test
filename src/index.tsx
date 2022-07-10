import { css } from "@emotion/react";
import "@emotion/react/macro";

console.log("Imported css:", css);

export function MyComponent() {
  return <div css={{ color: "red" }} />;
}
