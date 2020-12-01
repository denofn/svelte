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
  const p = Deno.run({ cmd: "denopack -i ./main.ts --output ./build.js".split(" ") });    
  console.log(await p.status()) // { success: true } | { success: false }
}

await build(Deno.args[0]);
