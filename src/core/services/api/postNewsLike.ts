import http from '../../interceptor/index.ts'

export const likeNews = async (newsId) => {

    try{
        const response = await http.post(`/News/NewsLike/${newsId}`);
        return response
    }
    catch(error){
        return error
    }
}