import Button from "../Button/Button";

interface InfoProps {
  text: string;
  number: number;
}

const Info = ({ text, number }: InfoProps): JSX.Element => {
  return (
    <section className="controls">
      <p className="info">
        {number} {text}
      </p>
      <Button />
    </section>
  );
};

export default Info;
