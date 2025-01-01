import http from '../../interceptor/index.ts'

export const verifyMessageAPI = async (user) => {
    try{
        const response = await http.post("/Sign/VerifyMessage", user);
        return response;
    }
    catch(error){
        console.log(error)
    }
}