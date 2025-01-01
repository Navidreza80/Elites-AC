import http from '../../interceptor/index.ts'

export const putNewsCommennt = async (values)  => {

    try{
        const response = await http.put("/News/UpdateNewsComment", values);
        return response
    }
    catch(error){
        return
    }
}