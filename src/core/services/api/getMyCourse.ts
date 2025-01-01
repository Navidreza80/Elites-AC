import http from '../../interceptor/index.ts'

export const getMyCourse = async () => {
    try{
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10");
        return response
    }
    catch(error){
        return error
    }
}