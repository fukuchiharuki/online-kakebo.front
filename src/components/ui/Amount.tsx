import { Fragment } from "react";

type Props = {
  children: number
};

function Amount(props: Props) {
  const amount = props.children;
  const amountLabel = (amount < 0)? `▲${(-amount).toLocaleString()}`: amount.toLocaleString();
  return (
    <Fragment>{amountLabel} 円</Fragment>
  );
}

export default Amount;
