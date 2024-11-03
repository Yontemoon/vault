/**
 *
 * ? November 3rd, 2024
 *
 * * Basic idea:
 * * When you want to useRef on an element, always set the default value to null and have a Generic type associated with
 * * the html element type you are referecing
 *
 * * When dealing with useRef that isnt specific referecing an HTML element. Example being a number value that you want to
 * * keep track of. You can either pass in a default value so react and infer the type, or pass in a generic if you don't want to
 * * set a default value.
 *
 */

import { useRef } from "react";

const UseRefType = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const number = useRef<number[]>(); // useRef([1])

  number.current = [32];

  return <input ref={inputRef} />;
};

export default UseRefType;
