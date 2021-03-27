import './FadeIn.scss';

type Props = {
  children: any
};

export default function FadeIn(props: Props) {
  return <div className="fade-in" {...props}></div>;
}
