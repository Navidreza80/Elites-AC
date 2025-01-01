import http from '../../../../interceptor/index'

const postJob = async (values) => {
    try {
    const result = await http.post('/SharePanel/CreateJobHistory', values);
    return result;
    }
    catch (error) {
    return error;
    }
};

export {postJob};