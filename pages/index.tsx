import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { decrement, increment } from '@store/slices/counter';

const Home: NextPage = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state: RootState) => state);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="text-6xl">Counter</div>
            <div className="text-4xl my-10">{counter.value}</div>

            <div>
                <button className="border border-black px-4 py-1 rounded-lg mr-5" onClick={() => dispatch(decrement())}>
                    decrement
                </button>
                <button className="border border-black px-4 py-1 rounded-lg" onClick={() => dispatch(increment())}>
                    increment
                </button>
            </div>
        </div>
    );
};

export default Home;
