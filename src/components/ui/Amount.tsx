import { Fragment } from "react";

type Props = {
  children: number
};

function Amount(props: Props) {
  return (
    <Fragment>{props.children.toLocaleString()} 円</Fragment>
  );
}

export default Amount;
