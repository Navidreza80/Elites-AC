import http from '../../interceptor/index.ts'

export const postCourseDisLike = async (id) => {
    try{
        const response = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
        return response
    }
    catch(error){
        return error
    }
}