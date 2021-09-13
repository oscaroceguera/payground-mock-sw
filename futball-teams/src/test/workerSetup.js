import { setupServer } from "msw/node";
import { rest } from "msw";
import { teamHandlers } from "../mocks/teams";

const server = setupServer(...teamHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
