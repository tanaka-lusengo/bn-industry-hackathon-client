import "./Button.scss";

const Button = ({ buttonName }) => {
  return <button className="button">{buttonName}</button>;
};

const ButtonNav = ({ buttonName }) => {
  return <button className="buttonNav ">{buttonName}</button>;
};

export { Button, ButtonNav };
