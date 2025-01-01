import http from '../../interceptor/index.ts'

export const dislikeNews = async (newsId) => {

    try{
        const response = await http.post(`/News/NewsDissLike/${newsId}`);
        return response
    }
    catch(error){
        return error
    }
}