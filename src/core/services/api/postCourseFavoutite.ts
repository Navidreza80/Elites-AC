import http from '../../interceptor/index.ts'

export const postCourseFavourite = async (value) => {

    try{
        const response = await http.post(`/Course/AddCourseFavorite`, value);
        return response
    }
    catch(error){
        return error
    }
}