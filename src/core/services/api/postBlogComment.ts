import http from '../../interceptor/index.ts'

export const postBlogComment = async (value) => {

    try{
        const response = await http.post("/News/CreateNewsComment", value);
        return response
    }
    catch(error){
        return error
    }
}