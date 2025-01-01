import http from '../../interceptor/index.ts'

const FilterBlogs = async (categoryId) => {
    try {
        const result = await http.get(`/News?PageNumber=1&NewsCategoryId=${categoryId}`);
        return result;
    } catch (error) {
        return [];
    }
};

export {FilterBlogs};