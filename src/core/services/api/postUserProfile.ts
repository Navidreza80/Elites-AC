import http from '../../interceptor/index.ts'

export const uploadImage = async (image) => {
    try{
        const response = await http.post("/SharePanel/AddProfileImage", image);
        return response
    }
    catch(error){
        return error
    }
}