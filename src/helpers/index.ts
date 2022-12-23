import { MustInclude, NonEmptyArray } from "../types";

function stringUnionToArray<T>() {
  return <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) =>
    elements;
}

export { stringUnionToArray };
