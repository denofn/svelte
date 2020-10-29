import { compile } from "../src/compiler/index.ts";

async function build(source: string) {
  let src = await Deno.readTextFile(source);
  const compiledDom = compile(src, {
  	filename: source,
  	generate: 'dom',
  	name: "Example",
  	sveltePath: "https://esm.sh/svelte",
  });
  await Deno.writeTextFile("./compiled.js", compiledDom.js.code);
  await Deno.run({ cmd: "denopack -i ./main.ts -o ./build.js".split(" ") });

}

await build(Deno.args[0]);
