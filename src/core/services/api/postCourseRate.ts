import http from '../../interceptor/index.ts'

export const postCoourseRate = async (id, rate) => {

    try{
        const response = await http.post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${rate}`);
        return response
    }
    catch(error){
        return error
    }
}