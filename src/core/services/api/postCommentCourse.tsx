import http from '../../interceptor/index.ts'

export const postCourseComment = async (value) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
      
    try{
        const response = await http.post("/Course/AddCommentCourse", value, config);
        return response
    }
    catch(error){
        return error
    }
}