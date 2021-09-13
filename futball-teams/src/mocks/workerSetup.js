import { setupWorker } from "msw";
import { teamHandlers } from "./teams";

export const server = setupWorker(...teamHandlers);
