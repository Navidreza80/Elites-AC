import http from '../../interceptor/index.ts'

const deleteCourseCommentLike = async (id) => {
    try{
        const response = await http.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=${id}`);
        return response
    }
    catch(error){
        return error
    }
}

export {deleteCourseCommentLike}