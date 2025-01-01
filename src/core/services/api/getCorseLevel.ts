import Http from "../../interceptor";

const GetCourseLevel = async () => {
  try {
    const result = await Http.get("/CourseLevel/GetAllCourseLevel");
    return result;
  } catch (error) {
    console.log(error);
  }
};
export {GetCourseLevel}