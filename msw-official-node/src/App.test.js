import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("User", () => {
  test("User Not authorized", async () => {
    render(<App />);

    const userBtn = screen.getByRole("button", {
      name: "GET USER",
    });

    expect(userBtn).toBeInTheDocument();

    userEvent.click(userBtn);
    const userMsg = await screen.findByRole("userMsg");
    expect(userMsg).toBeInTheDocument();
    expect(userMsg).toHaveTextContent("Not authorized");
  });
  test("User authorized", async () => {
    render(<App />);

    const userBtn = screen.getByRole("button", {
      name: "GET USER",
    });

    const loginBtn = screen.getByRole("button", {
      name: "LOGIN",
    });

    userEvent.click(loginBtn);
    userEvent.click(userBtn);

    expect(userBtn).toBeInTheDocument();
    const userMsg = await screen.findByRole("userMsg");
    expect(userMsg).toBeInTheDocument();
    expect(userMsg).toHaveTextContent("admin");
  });
});

describe("Login", () => {
  test("renders component", async () => {
    render(<App />);

    const loginMsg = screen.getByRole("loginMsg");
    expect(loginMsg).toBeInTheDocument();
    expect(loginMsg).toHaveTextContent("NO LOGUEADO");
  });
  test("renders user logged successfully", async () => {
    render(<App />);

    const loginBtn = screen.getByRole("button", {
      name: "LOGIN",
    });

    expect(loginBtn).toBeInTheDocument();

    userEvent.click(loginBtn);

    const loginMsg = screen.getByRole("loginMsg");
    expect(loginMsg).toBeInTheDocument();
    expect(loginMsg).toHaveTextContent("LOGUEADO");
  });
});
