import useSWR from 'swr';

import fetcher from '@/lib/fectcher';

const useBillboard = () => {
    const {data, error, isLoading} = useSWR('/api/arndom', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useBillboard;