import React from "react";
import { useNavigate } from "react-router-dom";
import { HiChevronRight, HiOutlineChevronRight } from "react-icons/hi";
import "./styles.css";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container-card">
      <div className="container-card-div">
        <div className="container-card-div-div">
          <div className="container-card-value">
            <span>{props.value}</span>
          </div>
          <div className="container-card-details">
            <span className="container-card-title">{props.name}</span>
            <span className="container-card-description">{props.details}</span>
          </div>
          <div className="container-card-chevron">
            <HiOutlineChevronRight
              style={{ strokeWidth: 2.3 }}
              size={22}
              onClick={() => [navigate("/app_dmetal_dev/" + props.name)]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
