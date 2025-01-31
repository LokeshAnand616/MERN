import React, { act } from "react";
import FormPage from "./forms";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Form Component", () => {
  beforeEach(() => {

        render(<FormPage />);

  });

  test("should render all basic form elements", () => {
    expect(
      screen.getByRole("heading", { name: /React Form Exploration/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/Username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", { name: /Agree to Terms/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
  });

  test("should show validation errors when submitting empty form", async () => {
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test("should validate incorrect email and short password", async () => {
    const usernameInput = screen.getByLabelText(/Username:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "JohnDoe" } });
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.change(passwordInput, { target: { value: "123" } });
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(/Email is not valid/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  test("should successfully submit form with valid input", async () => {
    const usernameInput = screen.getByLabelText(/Username:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const agreeCheckbox = screen.getByRole("checkbox", {
      name: /Agree to Terms/i,
    });
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "JaneDoe" } });
      fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(agreeCheckbox);
      fireEvent.click(submitButton);
    });

    expect(screen.queryByText(/Username is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();
  });
});
