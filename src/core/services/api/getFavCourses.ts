import http from '../../interceptor/index.ts'

export const getFavCourses = async () => {
    try{
        const response = await http.get("/SharePanel/GetMyFavoriteCourses");
        return response
    }
    catch(error){
        return false
    }
}