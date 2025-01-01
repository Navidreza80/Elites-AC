import http from '../../interceptor/index.ts'

export const putSecurityInfo = async (values)  => {
    let config = {
        headers: {
            "Content-Type": "application/json", 
        }
    }
    try{
        const response = await http.put("/SharePanel/EditSecurity", values, config);
        return response
    }
    catch(error){
        return
    }
}