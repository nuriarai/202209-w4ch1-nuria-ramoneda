import { useState } from "react";
import GentlemanStructure from "../../types";
import "./Gentleman.css";

interface GentlemanProps {
  gentleman: GentlemanStructure;
}

const Gentleman = ({
  gentleman: { name, picture, alternativeText, profession, status, twitter },
}: GentlemanProps): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleStatus = () => {
    setIsSelected(!isSelected);
  };

  return (
    <li
      className={`gentleman ${isSelected ? " selected" : ""}`}
      onClick={toggleStatus}
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={alternativeText}
        />
        <span className="gentleman__initial">{name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
