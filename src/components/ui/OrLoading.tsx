import FadeIn from './FadeIn';
import Loading from "./Loading";

type Props = {
  if: any,
  children: any
};

function OrLoading(props: Props) {
  if (props.if) return <Loading />;
  const children =
    (typeof props.children === "function")
      ? props.children()
      : props.children;
  return <FadeIn>{children}</FadeIn>;
}

export default OrLoading;
