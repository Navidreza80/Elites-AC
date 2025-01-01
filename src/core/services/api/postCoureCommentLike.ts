import http from '../../interceptor/index.ts'

export const postCourseCommentLike = async (id) => {
      
    try{
        const response = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${id}`);
        return response
    }
    catch(error){
        return error
    }
}