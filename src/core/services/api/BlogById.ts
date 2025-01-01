import http from '../../interceptor/index.ts'

const getBlogById = async (blogId) => {
  try {
    const result = await http.get(`/News/${blogId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getBlogById};