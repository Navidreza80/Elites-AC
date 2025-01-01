import http from '../../interceptor/index.ts'

export const postChangePass = async (value) => {

    try{
        const response = await http.post(`/SharePanel/ChangePassword`, value);
        return response
    }
    catch(error){
        return error
    }
}