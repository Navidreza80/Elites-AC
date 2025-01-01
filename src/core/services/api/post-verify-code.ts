import http from '../../interceptor/index.ts'

export const postVerify = async (code, values) => {

    try{
        const response = await http.post(`/Sign/LoginTwoStep?VrifyCode=${code}`, values);
        return response
    }
    catch(error){
        return error
    }
}