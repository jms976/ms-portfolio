/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client"/>
/// <reference types="node" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
