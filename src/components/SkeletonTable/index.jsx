import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles.css";

const SkeletonTable = () => {
  return (
    <div className="skeleton-table">
      <div className="skeleton-table-header">
        <Skeleton width={60} height={40} borderRadius={5} />
        <Skeleton width={60} height={40} borderRadius={5} />
        <Skeleton width={60} height={40} borderRadius={5} />
        <Skeleton width={60} height={40} borderRadius={5} />
      </div>
      <div className="skeleton-table-body">
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
      </div>
      <div className="skeleton-table-body">
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
      </div>
      <div className="skeleton-table-body">
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
      </div>
      <div className="skeleton-table-body">
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
        <Skeleton width={60} height={20} borderRadius={5} />
      </div>
    </div>
  );
};

export default SkeletonTable;
