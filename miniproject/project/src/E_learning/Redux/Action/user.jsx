import { createAction } from ".";
import {courseService} from "./../../Services/index";
import { FETCH_COURSES } from "./type";

// Async action
export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourses()
      .then((res) => {
        this.props.dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
