import { Button } from "../ui/button";

type Props = {
  className?: string;
  title: string;
};

const StartTrialButton = ({ className, title }: Props) => {
  return (
    <a href="">
      <Button className={className}>{title}</Button>
    </a>
  );
};

export default StartTrialButton;
