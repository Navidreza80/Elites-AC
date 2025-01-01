import http from '../../interceptor/index.ts'

export const postResetValue = async (value) => {

    try{
        const response = await http.post(`/Sign/Reset`, value);
        return response
    }
    catch(error){
        return error
    }
}