import http from '../../interceptor/index.ts'

export const postBlogCommentReply = async (value) => {

    try{
        const response = await http.post("/News/CreateNewsReplyComment", value);
        return response
    }
    catch(error){
        return error
    }
}