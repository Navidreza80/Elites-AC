import http from '../../interceptor/index.ts'

export const getCourseReserve = async () => {
    try{
        const response = await http.get("/SharePanel/GetMyCoursesReserve");
        return response
    }
    catch(error){
        return false
    }
}