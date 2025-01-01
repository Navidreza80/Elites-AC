import http from '../../interceptor/index.ts'

const resetPassConfirmVAlue = async (value) => {
    try {
        const result = await http.get(`/Sign/Reset/${value}`);
        return result;
    } catch (error) {
        return [];
    }
};

export {resetPassConfirmVAlue};