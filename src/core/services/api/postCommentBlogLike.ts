import http from '../../interceptor/index.ts'

export const likeComment = async (commentId, type) => {

    try{
        const response = await http.post(`/News/CommentLike/${commentId}?LikeType=${type}`);
        return response
    }
    catch(error){
        return error
    }
}