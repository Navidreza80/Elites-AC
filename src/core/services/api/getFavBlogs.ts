import http from '../../interceptor/index.ts'

export const getFavBlogs = async () => {
    try{
        const response = await http.get("/SharePanel/GetMyFavoriteNews");
        return response
    }
    catch(error){
        return false
    }
}