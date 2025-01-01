import http from '../../interceptor/index.ts'

const Filter = async (teacherId, pageInation, levelId, categoryId, max, min, courseType, techCount, listTech) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageInation}&RowsOfPage=12&CostDown=${min}&CostUp=${max}${techCount}${listTech}&courseLevelId=${levelId}&CourseTypeId=${courseType}&TeacherId=${teacherId}`);
        return result;
    } catch (error) {
        return error;
    }
};

export {Filter};