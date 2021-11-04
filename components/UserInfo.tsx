import React, { FC } from 'react';
import * as firebaseAuth from 'firebase/auth';
import { Button } from 'antd';

interface UserInfoProps {
    user: firebaseAuth.User | undefined;
    signIn: () => void;
}

export const UserInfo: FC<UserInfoProps> = ({ user, signIn }) => {
    if (user === undefined) {
        return (
            <Button onClick={signIn} type="primary">
                Sign-In
            </Button>
        );
    }

    const { email, displayName, uid, photoURL } = user;

    return (
        <>
            <div>
                <strong>Email:</strong>
                <br /> {email}
            </div>
            <div>
                <strong>Name:</strong>
                <br /> {displayName}
            </div>
            <div>
                <strong>Uid:</strong>
                <br />
                {uid}
            </div>
            <div>
                <img src={photoURL || ''} alt={displayName || ''} className="rounded-full" />
            </div>
        </>
    );
};
