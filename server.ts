import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve({ hostname: "localhost", port: 8080 }, (req: Request) => {
  const pathname = new URL(req.url).pathname;

  switch (pathname) {
    case "/home":
      return serveFile(req, "./static/index.html");
    case "/resume":
      return serveFile(req, "./static/resume.html");
    case "/contact":
      return serveFile(req, "./static/contact.html");
    case "/blog":
      return serveFile(req, "./static/blog.html");
    case "/projects":
      return serveFile(req, "./static/projects.html");
    default:
      break;
  }

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "static",
    });
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});
