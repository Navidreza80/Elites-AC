import http from '../../interceptor/index.ts'

export const selectImage = async (ImageId) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
      
    try{
        const response = await http.post("/SharePanel/SelectProfileImage", ImageId, config);
        return response
    }
    catch(error){
        return error
    }
}