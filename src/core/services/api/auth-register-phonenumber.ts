import http from '../../interceptor/index.ts'

export const registerPhoneNumber = async (phoneNumber) => {
    try{
        const response = await http.post("/Sign/SendVerifyMessage", phoneNumber);
        return response;
    }
    catch(error){
        return false
    }
}