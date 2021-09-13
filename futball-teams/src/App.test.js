import {
  render,
  screen,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import { server, rest } from "./test/workerSetup";

import App from "./App";

describe("App test", () => {
  it("renders error element", async () => {
    server.use(
      rest.get("/team/:id", (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    const { getByText } = render(<App />);
    const [madridElement] = screen.getByLabelText(() => [
      getByText(/Real Madrid/i),
    ]);
    fireEvent.click(madridElement);
    const [errorElement] = screen.getByLabelText(() => [getByText(/Error/i)]);
    expect(errorElement).toBeInTheDocument();
  });
});
