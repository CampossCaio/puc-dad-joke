import { ByRoleOptions, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from ".";
import { MemoryRouter } from "react-router";
import { useAuthWithContext } from "@src/hooks/useAuthWithContext";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: vi.fn(() => ({ state: "idle" })),
  };
});

vi.mock("@src/hooks/useAuthWithContext");

describe("Header", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.mocked(useAuthWithContext).mockReturnValue({
      user: null,
    } as any);
  });

  it("should render the nav links correctly", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /random joke/i });
    await user.click(homeLink);

    waitFor(() => {
      expect(homeLink).toHaveAttribute("arria-current", "page");
    });

    expect(homeLink.classList).toContain("active");

    const searchLink = screen.getByRole("link", { name: /search joke/i });
    await user.click(searchLink);

    waitFor(() => {
      expect(searchLink).toHaveAttribute("arria-current", "page");
    });

    expect(searchLink.classList).toContain("active");
  });

  describe("fot authenticated users", () => {
    beforeEach(() => {
      vi.mocked(useAuthWithContext).mockReturnValue({
        user: { name: "John Doe" },
      } as any);
    });
    it("should display the submit nav link", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const submitLink = screen.getByRole("link", { name: /submit new joke/i });

      expect(submitLink).toBeInTheDocument();
    });
    it("should display the avatar", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      expect(screen.getByTestId("avatar")).toBeInTheDocument();
    });
  });

  describe("for unauthenticated users", () => {
    it("should not display the submit nav link", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const submitLink = screen.queryByRole("link", {
        name: /submit new joke/i,
      });

      expect(submitLink).not.toBeInTheDocument();
    });
    it("should display the sign in button", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      expect(
        screen.getByRole("button", { value: "Sign in" } as ByRoleOptions)
      ).toBeInTheDocument();
    });
  });
});
