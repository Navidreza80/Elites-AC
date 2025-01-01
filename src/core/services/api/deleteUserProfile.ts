import http from '../../interceptor/index.ts'

const removeUserProfile = async (id) => {
    try {
        const result = await http.delete('/SharePanel/DeleteProfileImage', {
            data: {
                id,
            }
        });
        return result;
    } catch (error) {
        return [];
    }
};

export {removeUserProfile};