import http from '../../interceptor/index.ts'

export const postCourseLike = async (id) => {

    try{
        const response = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
        return response
    }
    catch(error){
        return error
    }
}