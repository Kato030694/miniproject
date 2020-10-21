import React, { Component } from "react";
import CourseItem from "../../Components/CourseItem";
// import Axios from "axios";
import { connect } from "react-redux";
import fetchCourses from "./../../Services/user";
// import { courseService } from "../../Services";
// import { createAction } from "../../Redux/Action";
// import { FETCH_COURSES } from "../../Redux/Action/type";
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4" style={{ color: "blue" }}>
          Danh Sach Khoa Hoc
        </h1>
        <div className="cointainer">
          <div className="row">
            {this.props.coursesList.map((item, index) => (
              <div className="col-4 mb-3" key={index}>
                <CourseItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Chạy sau render và đúng lần đầu tiên
  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }
}
const mapStateToProps = (state) => ({
  coursesList: state.courses.courses,
});
export default connect(mapStateToProps, null)(HomeScreen);
