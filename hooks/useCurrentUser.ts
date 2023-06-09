import userSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = userSWR('/api/current', fetcher)

    return{
        data,
        isLoading,
        error,
        mutate
    }
};

export default useCurrentUser;