import http from '../../interceptor/index.ts'

export const postReserveCourse = async (id) => {

    try{
        const response = await http.post('/CourseReserve/ReserveAdd', {courseId: `${id}`});
        return response
    }
    catch(error){
        return error
    }
}