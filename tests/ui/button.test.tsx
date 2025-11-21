import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders children and handles click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports asChild rendering", () => {
    render(
      <Button asChild>
        <a href="#cta">Ga verder</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: /ga verder/i });
    expect(link).toHaveAttribute("href", "#cta");
    expect(link.className).toContain("ui-button");
  });
});
