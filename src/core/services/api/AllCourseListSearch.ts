import http from '../../interceptor/index.ts'

const allCourseListSearch = async (pageNumber) => {
    try {
    const result = await http.get(`/Home/GetCoursesWithPagination?&RowsOfPage=120000`);
    return result;
    }
    catch (error) {
    return error;
    }
};

export {allCourseListSearch};