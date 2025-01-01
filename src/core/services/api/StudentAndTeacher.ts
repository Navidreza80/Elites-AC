import http from '../../interceptor/index.ts'

const getStudentAndTeacherCount = async () => {
    try {
        const result = await http.get(
            '/Home/LandingReport'
        );
    
        return result;
    }
    catch (err) {
        return [];
    }
};

export {getStudentAndTeacherCount};