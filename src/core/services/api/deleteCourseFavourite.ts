import http from '../../interceptor/index.ts'

const deleteCourseFavourite = async (id) => {	

    
    try {
        const result = await http.delete('/Course/DeleteCourseFavorite', {
            data: {
                id,
            },
        })
        return result;
    } catch (error) {
        return [];
    }
};

export {deleteCourseFavourite};