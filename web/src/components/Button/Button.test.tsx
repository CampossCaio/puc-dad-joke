import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render correctly according to the variant", () => {
    const { rerender } = render(
      <Button variant="secondary">Primary Button</Button>
    );
    expect(screen.getByRole("button").classList).toContain("secondary");

    rerender(<Button variant="tertiary">Tertiary Button</Button>);
    expect(screen.getByRole("button").classList).toContain("tertiary");

    rerender(<Button variant="primary">Tertiary Button</Button>);
    expect(screen.getByRole("button").classList).toContain("primary");
  });
});
