import { rest } from "msw";

export const usersHandlers = [
  rest.post("http://localhost:5000/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(ctx.status(200));
  }),
  rest.get("http://localhost:5000/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(500),
        ctx.json({
          username: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
