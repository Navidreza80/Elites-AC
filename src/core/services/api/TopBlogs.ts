import http from '../../interceptor/index.ts'

const getTopBlogs = async () => {
  try {
    const result = await http.get('/News?PageNumber=1&RowsOfPage=3');

    return result;
  } catch (error) {
    return [];
  }
};

export {getTopBlogs};