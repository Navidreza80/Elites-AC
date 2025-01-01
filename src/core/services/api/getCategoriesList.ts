import http from '../../interceptor/index.ts'

const getCategoriesList = async () => {
    try {
        const result = await http.get('/Home/GetTechnologies');
        return result;
    } catch (error) {
        return [];
    }
};

export {getCategoriesList};