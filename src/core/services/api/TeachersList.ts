import http from '../../interceptor/index.ts'

const getTeacher = async () => {
    try {
        const result = await http.get('/Home/GetTeachers');
        return result;
    } catch (error) {
        return [];
    }
};

export {getTeacher};