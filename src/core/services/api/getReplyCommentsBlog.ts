import http from '../../interceptor/index.ts'

export const getReplyComment = async (commentId) => {
    try{
        const response = await http.get(`/News/GetRepliesComments?Id=${commentId}`);
        return response
    }
    catch(error){
        return false
    }
}