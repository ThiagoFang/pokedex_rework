import { render } from "@testing-library/react";
import Title from ".";

test("title component", () => {
  const { getByText } = render(<Title>Hello, World!</Title>);

  expect(getByText("Hello, World!")).toBeTruthy();
})