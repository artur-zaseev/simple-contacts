import React, { FC, useMemo } from 'react';

export const Loader: FC = () => {
    const styles = useMemo(() => {}, []);

    return (
        <>
            <div className="lds-dual-ring"></div>
        </>
    );
};
