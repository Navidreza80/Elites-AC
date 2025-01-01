import http from '../../interceptor/index.ts'

export const postBlogRate = async (id, rate) => {

    try{
        const response = await http.post(`/News/NewsRate?NewsId=${id}&RateNumber=${rate}`);
        return response
    }
    catch(error){
        return error
    }
}