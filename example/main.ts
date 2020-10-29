// deno run --config=../tsconfig.json --importmap=../import_map.json -A --unstable ./build.ts Home.svelte 

import Deno from "./compiled.js";

new Deno({
  target: document.body
})
