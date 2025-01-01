import http from '../../../../interceptor/index'

const getAllJobs = async () => {
    try {
    const result = await http.get('/SharePanel/GetMyJobHistories');
    return result;
    }
    catch (error) {
    return error;
    }
};

export {getAllJobs};