import http from '../../interceptor/index.ts'

export const getSecurityInfo = async () => {
    try{
        const response = await http.get(`/SharePanel/GetSecurityInfo`);
        return response
    }
    catch(error){
        return false
    }
}