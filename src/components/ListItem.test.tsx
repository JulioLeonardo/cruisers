import React from "react";
import TestRenderer from "react-test-renderer";
import { ListItem } from "./ListItem";
import { MOCK_SHIPS } from "../__mockData__/mockShips";

it("renders correctly", () => {
  const tree = TestRenderer.create(<ListItem ship={MOCK_SHIPS[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
