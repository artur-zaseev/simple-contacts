import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Header, UserInfo } from '@/components';
import { useAuth } from '@/contexts';

const Home: NextPage = () => {
    const { user, signIn } = useAuth();
    return (
        <div className="h-full flex flex-col">
            <Header />
            <div className="bg-gray-500 flex-1 flex justify-center items-center">
                <UserInfo user={user} signIn={signIn} />
            </div>
        </div>
    );
};

export default Home;
