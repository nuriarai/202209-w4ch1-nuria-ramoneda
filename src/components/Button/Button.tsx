import "./Button.css";

interface ButtonProps {
  text: string;
  className: string;
  action?: () => void;
}

const Button = ({ text, className, action }: ButtonProps): JSX.Element => {
  return (
    <button className={`button ${className}`} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
