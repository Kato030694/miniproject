// Dung formik de tao quan ly form Signup
import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {userService} from "./../../Services/index";
import {signUserSchema} from "./../../Services/user";


class SignupScreen extends Component {
  _handleSubmit = (values) => {
    // console.log(values);
    userService.signUp(values)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Sign Up</h1>
        <Formik
          // Hinh hai object formik tra ra
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maNhom: "GP01",
          }}
          validationSchema={signUserSchema}
          //   Kiem tra schema truoc khi submit
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Account:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Name:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                ></Field>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                ></Field>
              </div>
              <div className="form-group">
                <label>Number:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                ></Field>
              </div>
              <div className="form-group">
                <label>ID Group:</label>
                <Field
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                  component="select"
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>)<option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
              </div>
              <div className="text-center">
                <button className="btn btn-success" >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
export default SignupScreen;
