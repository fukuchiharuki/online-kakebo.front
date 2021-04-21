import { Fragment } from "react";

type Props = {
  children: number
};

function Amount(props: Props) {
  return (
    <Fragment>{props.children.toLocaleString()}</Fragment>
  );
}

export default Amount;
