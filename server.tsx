/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { router } from "https://crux.land/router@0.0.11";
import { h, ssr } from "https://crux.land/nanossr@0.0.4";

import Home from "./pages/home.tsx";

const render = (component) => ssr(() => <App>{component}</App>);

serve(router(
  {
    "/": () => render(<Home />),
    "/projects": () => render(<Projects />),
    "/resume": () => render(<Resume />),
    "/contact": () => render(<Contact />),
    "/blog": () => render(<Blog />),
  },
  () => render(<NotFound />),
));

function App({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

function NotFound() {
  return <h1>404: NotFound</h1>;
}
