import http from '../../interceptor/index.ts'

export const registerGmail = async (GmailAndPhoneNumber) => {
    try{
        const response = await http.post("/Sign/SendVerifyMessage", GmailAndPhoneNumber);
        return response;
    }
    catch(error){
        return false
    }
}