import http from '../../interceptor/index'

const getAllBlogsListSearch = async () => {
    try {
    const result = await http.get('/News?PageNumber=1&RowsOfPage=12000');
    return result;
    }
    catch (error) {
    return error;
    }
};

export {getAllBlogsListSearch};