import React, { Suspense, lazy } from "react";

// const LazyComponent = lazy(() => import("./LazyComponent"));

const LazyComponent = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("./LazyComponent")), 2000); // 2 seconds delay
}));


function SuspenseReact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default SuspenseReact;
