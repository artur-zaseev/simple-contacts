import type { NextPage } from 'next';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const Home: NextPage = () => {
    const { user, signIn, signOut } = useAuth();

    useEffect(() => {
        !!user && console.log('user', user);
    }, [user]);

    if (!user) {
        return (
            <div className="bg-gray-600 w-full min-h-screen flex flex-col justify-center items-center text-white text-center">
                <button onClick={() => signIn()} className="px-3 py-1 border uppercase my-3">
                    sign-In
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-600 w-full min-h-screen flex flex-col justify-center items-center text-white text-center">
            <button onClick={() => signOut()} className="px-3 py-1 border uppercase my-3">
                sign-Out
            </button>

            <div>
                <strong>Email:</strong>
                <br /> {user.email}
            </div>
            <div>
                <strong>Name:</strong>
                <br /> {user.displayName}
            </div>
            <div>
                <strong>Uid:</strong>
                <br />
                {user.uid}
            </div>
            <div>
                <img src={user.photoURL} alt="" className="rounded-full" />
            </div>
        </div>
    );
};

export default Home;
