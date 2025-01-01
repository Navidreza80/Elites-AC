import http from '../../interceptor/index.ts'

export const addToFav = async (newsId) => {

    try{
        const response = await http.post(`/News/AddFavoriteNews?NewsId=${newsId}`);
        return response
    }
    catch(error){
        return error
    }
}