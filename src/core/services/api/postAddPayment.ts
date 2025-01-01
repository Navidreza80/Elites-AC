import http from '../../interceptor/index.ts'

export const addCoursePayment = async (value) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
      
    try{
        const response = await http.post("/CoursePayment/StudentAddPeyment", value, config);
        return response
    }
    catch(error){
        return error
    }
}