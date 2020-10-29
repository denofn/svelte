## Svelte Deno DOM Example

## Building

Make sure you have `denopack` installed and run the following command.
```sh
> cd example/
> deno run --config=../tsconfig.json --importmap=../import_map.json -A --unstable ./build.ts Home.svelte
```

Simple serve the example directory and navigate to localhost:9000 to see it in action.
```sh
> python -m SimpleHTTPServer
```
