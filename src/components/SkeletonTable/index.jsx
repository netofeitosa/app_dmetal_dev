import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles.css";

const SkeletonTable = () => {
  return (
    <div className="skeleton-table">
      <div className="skeleton-table-title">
        <Skeleton width={120} height={20} borderRadius={5} />
        <Skeleton width={250} height={15} borderRadius={5} />
      </div>
      <hr style={{ border: "0.5px solid #dfdfdf" }} />
      <div className="skeleton-table-header">
        <Skeleton width={65} height={40} borderRadius={5} />
        <Skeleton width={65} height={40} borderRadius={5} />
        <Skeleton width={65} height={40} borderRadius={5} />
        <Skeleton width={65} height={40} borderRadius={5} />
      </div>
      <hr style={{ border: "0.5px solid #dfdfdf" }} />
      <div className="skeleton-table-body">
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
      </div>
      <hr style={{ border: "0.5px solid #dfdfdf" }} />
      <div className="skeleton-table-body">
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
      </div>
      <hr style={{ border: "0.5px solid #dfdfdf" }} />
      <div className="skeleton-table-body">
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
      </div>
      <hr style={{ border: "0.5px solid #dfdfdf" }} />
      <div className="skeleton-table-body">
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
        <Skeleton width={65} height={20} borderRadius={5} />
      </div>
    </div>
  );
};

export default SkeletonTable;
