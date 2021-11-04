import { FC } from 'react';
import { Button } from 'antd';

import { signOut } from '@/utils/firebase';

export const Header: FC = () => {
    return (
        <header className="flex justify-between items-center bg-blue-300 px-10 py-2">
            <h1 className="uppercase text-white text-xl">Simple Contacts</h1>
            <Button onClick={() => signOut()} type="primary">
                Sign Out
            </Button>
        </header>
    );
};
