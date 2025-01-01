import http from '../../interceptor/index.ts'

export const getCourseReplyComment = async (courseId, commentId) => {
    try{
        const response = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`);
        return response
    }
    catch(error){
        return false
    }
}