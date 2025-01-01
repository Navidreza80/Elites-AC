import http from '../../interceptor/index.ts'

export const getSortBlog = async (col, sortType) => {
    try{
        const response = await http.get(`/News?PageNumber=1&RowsOfPage=10&SortingCol=${col}&SortType=${sortType}`);
        return response
    }
    catch(error){
        return false
    }
}