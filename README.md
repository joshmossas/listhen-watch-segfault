# Listhen Segmentation Fault

On Node v20.12 or greater running listhen in watch mode causes a Segmentation fault on Linux.

## Reproduction

- install Node `v20.12` or greater
- run `pnpm run dev` (runs `listhen ./src/server.ts --watch`)
- You should get the following error

```bash
> listhen-watch-tests@1.0.0 dev /home/joshmossas/Documents/modii/open-source/listhen-watch-tests
> listhen ./src/server.ts --watch


  ➜ Local:    http://localhost:3000/
  ➜ Network:  use --host to expose

🚀 Loading server entry ./src/server.ts                                                                                                     listhen 1:59:14 PM
✅ Server initialized in 22ms                                                                                                               listhen 1:59:14 PM
Segmentation fault (core dumped)
 ELIFECYCLE  Command failed with exit code 139.
```

If you run `pnpm run serve` the error does not occur (This runs listhen without the watch flag)
