import http from '../../interceptor/index.ts'

const getCourseById = async (courseId) => {
  try {
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${courseId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseById};