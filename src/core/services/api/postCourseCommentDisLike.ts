import http from '../../interceptor/index.ts'

export const postCourseCommentDisLike = async (id) => {
      
    try{
        const response = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${id}`);
        return response
    }
    catch(error){
        return error
    }
}