// import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader";

import "../../assets/css/add_slider.css";

export default function AddSlider() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageError, setImageError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descError, setDescError] = useState("");

  function onFileSelect(event) {
    setImage(event.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("title", title);
    formdata.append("description", description);

    fetch("http://localhost:8000/api/sliders", {
      method: "POST",
      body: formdata,
    })
      .then((resposen) => resposen.json())
      .then((data) => {
        if (data.errors) {
          if (data.errors.image) {
            setImageError(data.errors.image[0]);
          } else {
            setImageError("");
          }
          if (data.errors.title) {
            setTitleError(data.errors.title[0]);
          } else {
            setTitleError("");
          }
          if (data.errors.description) {
            setDescError(data.errors.description[0]);
          } else {
            setDescError("");
          }
        }

        if (data.status === "success") {
          alert("New Slider added successfully.");
          setTitle("");
          setDescription("");
          setImage("");
          document.getElementById("sliderForm").reset();
        }
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div>
      <AdminHeader />
      <div className="container p-3">
        <div className="card mt-5">
          <div className="card-header">
            <h5>Add Slider</h5>
          </div>
          <div className="card-body">
            <form
              action=""
              method="POST"
              id="sliderForm"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label htmlFor="title">Slider Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p className="text-danger">{titleError}</p>
              </div>
              <div className="form-group">
                <label htmlFor="description">Slider Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <p className="text-danger">{descError}</p>
              </div>
              <div className="form-group">
                <label htmlFor="image">Slider Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={onFileSelect}
                />
                <p className="text-danger">{imageError}</p>
              </div>
              <div className="form-group right">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
