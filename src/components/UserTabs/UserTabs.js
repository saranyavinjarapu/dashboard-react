import React, { Component } from "react";
import "./UserTabs.css";
import axios from "axios";

/* eslint-disable */
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
/* eslint-enable */
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class UserTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      repeat_password: null,
      first_name: null,
      last_name: null,
      address: null,
      country: null,
      errors: {
        email: "",
        password: "",
        repeat_password: "",
        first_name: "",
        last_name: "",
        address: "",
        country: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var data = {
      email: this.state.email,
      password: this.state.password,
      repeat_password: this.state.repeat_password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      country: this.state.country,
    };

    axios
      .post("/action.php", data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // this.update_form.value = "";
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        Array.from(document.querySelectorAll("select")).forEach(
          (select) => (select.value = "")
        );
        console.log(error);
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "repeat_password":
        errors.repeat_password =
          value.length < 8 ? "Repeat Password must be 8 characters long!" : "";
        break;
      case "first_name":
        errors.first_name =
          value.length < 5 ? "First Name must be 5 characters long!" : "";
        break;
      case "last_name":
        errors.last_name =
          value.length < 5 ? "Last Name must be 5 characters long!" : "";
        break;
      case "address":
        errors.address =
          value.length < 10 ? "Address must be 10 characters long!" : "";
        break;
      case "country":
        errors.country = value.length = 0
          ? "Country must be selected from the drop down"
          : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  changeTab(ref) {
    try {
      if (ref.currentTarget.getAttribute("data-tab") === "settings") {
        document.getElementById("form-body").classList.remove("active");
        ref.currentTarget.parentNode.classList.remove("information");
      } else {
        document.getElementById("form-body").classList.add("active");
        ref.currentTarget.parentNode.classList.add("information");
      }
    } catch (msg) {
      console.log(msg);
    }
  }

  updateSettings = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      window.alert("Settings Data Updated Successfully");
    } else {
      window.alert("Settings Data Update Failed");
    }
  };

  updateInformation = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      window.alert("Information Data Updated Successfully");
    } else {
      window.alert("Information Data Update Failed");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="form">
        <div className="head">
          <div
            onClick={(e) => this.changeTab(e)}
            data-tab="settings"
            className="settings"
          >
            Account Settings
          </div>
          <div
            onClick={(e) => this.changeTab(e)}
            data-tab="information"
            className="information"
          >
            User Information
          </div>
        </div>

        <form id="update_form" onSubmit={this.handleSubmit}>
          <div className="body" id="form-body">
            <div className="settings">
              <div className="form-row">
                <label htmlFor="email">Change Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="repeat_password">Verify Password</label>
                <input
                  type="password"
                  name="repeat_password"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.repeat_password.length > 0 && (
                  <span className="error">{errors.repeat_password}</span>
                )}
              </div>
              <div className="row">
                <span></span>
              </div>
              <div className="form-row">
                <button type="submit" onClick={(e) => this.updateSettings(e)}>
                  Update Settings Data
                </button>
              </div>
            </div>
            <div className="information">
              <div className="form-row">
                <label htmlFor="first_name">Change First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.first_name.length > 0 && (
                  <span className="error">{errors.first_name}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="last_name">Change Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.last_name.length > 0 && (
                  <span className="error">{errors.last_name}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="address">Change Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.address.length > 0 && (
                  <span className="error">{errors.address}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="country">Change Country</label>
                <select
                  id="country"
                  name="country"
                  placeholder="Country"
                  onChange={this.handleChange}
                  noValidate
                >
                  <option value="">Please Select a Country</option>
                  <option value="Germany">Germany</option>
                  <option value="Austria">Austria</option>
                  <option value="Switzerland">Switzerland</option>
                </select>

                {errors.country.length > 0 && (
                  <span className="error">{errors.country}</span>
                )}
              </div>
              <div className="row">
                <span></span>
              </div>
              <div className="form-row">
                <button
                  type="submit"
                  onClick={(e) => this.updateInformation(e)}
                >
                  Update Information Data
                </button>
              </div>
            </div>
          </div>

          <div className="form-row-footer">
            <button type="submit">SUBMIT DATA</button>
          </div>
        </form>
      </div>
    );
  }
}
export default UserTabs;
