import React,{ Suspense } from 'react';
const LazyComponent = React.lazy(()=>import('./LazyComponent.js')); 
function SuspenseReact(){
    return(
        <>
        <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      </div>
        </>
    );
}
export default SuspenseReact;