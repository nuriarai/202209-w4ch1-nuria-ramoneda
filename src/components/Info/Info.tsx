import Button from "../Button/Button";

interface InfoProps {
  text: string;
  number: number;
}

const Info = ({ text, number }: InfoProps): JSX.Element => {
  const select = () => {};

  return (
    <section className="controls">
      <p className="info">
        {number} {text}
      </p>
      <Button className="button" text="Select all" action={select} />
    </section>
  );
};

export default Info;
