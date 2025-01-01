import http from '../../interceptor/index.ts'

const allCourseList = async (pageNumber) => {
    try {
    const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=12`);
    return result;
    }
    catch (error) {
    return error;
    }
};

export {allCourseList};