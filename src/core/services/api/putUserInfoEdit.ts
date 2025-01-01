import http from '../../interceptor/index.ts'

export const putUserInfoEdit = async (values)  => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
    try{
        const response = await http.put("/SharePanel/UpdateProfileInfo", values, config);
        return response
    }
    catch(error){
        return
    }
}