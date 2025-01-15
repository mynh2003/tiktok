import * as httpRequest from '~/utils/httpRequest';

export const search = async (keywords, count = '10') => {
    try {
        const res = await httpRequest.get('/searchUser', {
            params: {
                keywords,
                count,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
