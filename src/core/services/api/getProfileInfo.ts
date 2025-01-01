import http from '../../interceptor/index.ts'

export const getProfile = async () => {
    try{
        const response = await http.get("/SharePanel/GetProfileInfo");
        return response
    }
    catch(error){
        return false
    }
}