import { Fragment } from "react";

type Props = {
  if: any,
  children: any
};

function Mount(props: Props) {
  if (!props.if) return null;
  return <Fragment>{props.children}</Fragment>;
}

export default Mount;
