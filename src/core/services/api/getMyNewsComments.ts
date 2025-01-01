import http from '../../interceptor/index.ts'

export const getMyNewsComment = async () => {
    try{
        const response = await http.get("/SharePanel/GetMyNewsComments");
        return response
    }
    catch(error){
        return false
    }
}