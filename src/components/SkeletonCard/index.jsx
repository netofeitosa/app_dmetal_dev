import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./styles.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card-div">
        <div className="skeleton-card-div-div">
          <div className="skeleton-card-value">
            <Skeleton width={50} height={50} borderRadius={8} />
          </div>
          <div className="skeleton-card-details">
            <span className="skeleton-card-title">
              <Skeleton width={120} height={25} borderRadius={8} />
            </span>
            <span className="skeleton-card-description">
              <Skeleton width={180} height={15} borderRadius={8} />
            </span>
          </div>
          <div className="skeleton-card-chevron">
            <Skeleton width={15} height={25} borderRadius={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
