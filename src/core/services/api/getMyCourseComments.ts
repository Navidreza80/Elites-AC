import http from '../../interceptor/index.ts'

export const getMyCourseComment = async () => {
    try{
        const response = await http.get("/SharePanel/GetMyCoursesComments");
        return response
    }
    catch(error){
        return false
    }
}