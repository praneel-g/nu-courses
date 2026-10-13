import { Hono } from "hono";
import { cors } from "hono/middleware";
import { coursesRouter } from "./courses.ts";
import { searchRouter } from "./search.ts";
import { sectionsRouter } from "./sections.ts";
import { subjectsRouter } from "./subjects.ts";
import { termsRouter } from "./terms.ts";

const app = new Hono();
app.use("/*", cors());
app.route("/terms", termsRouter)
app.route("/subjects", subjectsRouter);
app.route("/courses", coursesRouter);
app.route("/search", searchRouter);
app.route("/sections", sectionsRouter);

// Deno.serve is built in; hosts such as Deno Deploy may pass the port in PORT.
Deno.serve({ port: Number(Deno.env.get("PORT") ?? 8000) }, app.fetch);
