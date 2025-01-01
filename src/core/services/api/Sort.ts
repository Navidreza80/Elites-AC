import http from '../../interceptor/index.ts'

const Sort = async (col, sortType) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?RowsOfPage=85&SortingCol=${col}&SortType=${sortType}`);
        return result;
    } catch (error) {
        return error;
    }
};

export {Sort};