import http from '../../interceptor/index.ts'

export const getPaymentList = async () => {
    try{
        const response = await http.get("/CoursePayment/StudentUserPayList");
        return response
    }
    catch(error){
        return false
    }
}