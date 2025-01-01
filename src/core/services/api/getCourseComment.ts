import http from '../../interceptor/index.ts'

const getCourseComment = async (id) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${id}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseComment};