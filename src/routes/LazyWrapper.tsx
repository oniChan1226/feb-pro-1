import React, { ComponentType, lazy, Suspense } from "react";


const LazyWrapper = (importFunc: () => Promise<{ default: ComponentType<any> }>, fallback: React.ReactNode = <div>Loading...</div>) => {
    const Component = lazy(importFunc);
    console.log("LazyWrapper");

    return (props: any) => (
        <Suspense fallback={ fallback }>
            <Component { ...props }/>
        </Suspense>
    )
};

export default LazyWrapper;