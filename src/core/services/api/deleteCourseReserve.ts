import http from '../../interceptor/index.ts'

const deleteCourseReserve = async (id) => {	
    
    try {
        const result = await http.delete('/CourseReserve', {
            data: {
                id,
            },
        })
        return result;
    } catch (error) {
        return [];
    }
};

export {deleteCourseReserve};