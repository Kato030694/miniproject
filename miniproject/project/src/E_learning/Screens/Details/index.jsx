import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Action";
import { FETCH_COURSE_DETAIL } from "../../Redux/Action/type";
import { courseService } from "../../Services";
class CourseDetailScreen extends Component {
  render() {
    const { coursesDetail } = this.props;
    return (
      <div>
        <img src={coursesDetail.hinhAnh} alt="course Details" />
        <h3>{coursesDetail.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    courseService
      .fetchCoursesDetail()
      .then((res) => {
        this.props.dispatch(createAction(FETCH_COURSE_DETAIL, res.data));

      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  coursesDetail: state.courses.coursesDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps, null)(CourseDetailScreen);
