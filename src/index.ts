import { Hono } from "hono";
import todos from "./todos";
import { cors } from "hono/cors";

const app = new Hono();
app.use("*", cors());
app.route("/api/todos", todos);

export default app;
