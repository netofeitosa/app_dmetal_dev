import React from "react";
import { useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import "./styles.css";
import SkeletonCard from "../SkeletonCard";

const Card = (props) => {
  const navigate = useNavigate();
  return !props.loading ? (
    <SkeletonCard />
  ) : (
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
            <HiChevronRight
              size={26}
              onClick={() => [navigate("/" + props.name)]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;