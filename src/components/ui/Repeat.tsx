import { Fragment } from "react";

type Props<T> = {
  in: T[],
  children: (it: T) => any
};

function Repeat<T>(props: Props<T>) {
  return <Fragment>{props.in.map(props.children).map((it, i) => <Fragment key={i}>{it}</Fragment>)}</Fragment>
}

export default Repeat;
