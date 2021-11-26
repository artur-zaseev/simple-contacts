import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const UserControl: FC = ({ children }) => {
    const { user } = useSelector((state: RootState) => state.user);

    return (
        <>
            <div>{JSON.stringify(user)}</div>
            {children}
        </>
    );
};
