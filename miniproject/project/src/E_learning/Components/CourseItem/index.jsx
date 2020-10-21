import React, { Component } from "react";
export default class CourseItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <img src={item.hinhAnh} style= {{width: "100%", height: "250px"}}alt="" />
        <p className="lead">{item.tenKhoaHoc}</p>
        <p className="lead">{item.biDanh}</p>
        <p className="lead">{item.soLuongHocVien}</p>
        <button className="btn btn-success">Submit</button>
      </div>
    );
  }
}
