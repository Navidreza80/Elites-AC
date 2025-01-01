import http from '../../interceptor/index.ts'

export const getRelatedBlog = async (id) => {
    try{
        const response = await http.get(`/News/GetNewsWithCategory/${id}`);
        return response
    }
    catch(error){
        return false
    }
}