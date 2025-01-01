import http from '../../interceptor/index.ts'

export const getNewsCategoryList = async () => {
    try{
        const response = await http.get("/News/GetListNewsCategory");
        return response
    }
    catch(error){
        return false
    }
}