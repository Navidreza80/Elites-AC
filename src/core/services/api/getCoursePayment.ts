import http from '../../interceptor/index.ts'

const getCoursePayment = async (id) => {
  try {
    const result = await http.get(`/CoursePayment/StudentUserPayList?CourseId=${id}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCoursePayment};