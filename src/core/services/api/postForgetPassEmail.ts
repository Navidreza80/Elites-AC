import http from '../../interceptor/index.ts'

export const postForgetPassEmail = async (value) => {
    try{
        const response = await http.post("/Sign/ForgetPassword", value);
        return response
    }
    catch(error){
        return error
    }
}