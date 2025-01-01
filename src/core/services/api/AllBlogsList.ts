import http from '../../interceptor/index'

const getAllBlogsList = async () => {
    try {
    const result = await http.get('/News?PageNumber=1&RowsOfPage=50');
    return result;
    }
    catch (error) {
    return error;
    }
};

export {getAllBlogsList};