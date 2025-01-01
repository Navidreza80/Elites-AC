import http from '../../interceptor/index.ts'

const deleteCourseLike = async (id) => {

    try{
        const result = await http.delete(`/Course/DeleteCourseLike`, {
            data: {
                id,
            },
        })
        return result
    } catch(error){
        return error
    }
}

export {deleteCourseLike}