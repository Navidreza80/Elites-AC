import http from '../../interceptor/index.ts'

const getCourseList = async (count) => {
  try {
    const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseList};