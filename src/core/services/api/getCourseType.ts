import http from '../../interceptor/index.ts'

export const getCourseType = async () => {
    try{
        const response = await http.get("/CourseType/GetCourseTypes");
        return response
    }
    catch(error){
        return false
    }
}