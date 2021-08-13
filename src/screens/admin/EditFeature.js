// import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";

import "../../assets/css/add_slider.css";
import { useHistory } from "react-router-dom";

export default function EditFeature({ match }) {
  const [id, setId] = useState(0);
  const [image, setImage] = useState();
  const [oldImage, setOldImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageError, setImageError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descError, setDescError] = useState("");

  let history = useHistory();

  useEffect(
    function () {
      const id = match.params.id;
      fetch(`http://localhost:8000/api/features/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            setId(data.data.id);
            setTitle(data.data.title);
            setDescription(data.data.description);
            setTitle(data.data.title);
            setOldImage(data.data.image);
          } else {
            console.error("Something went wrong!");
          }
        })
        .catch((error) => console.log(error));
    },
    [match]
  );

  function onFileSelect(event) {
    setImage(event.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("id", id);

    fetch(`http://localhost:8000/api/features/${id}`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
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
          alert("Feature updated successfully.");
          setTitle("");
          setDescription("");
          setImage("");
          setOldImage("");
          setTimeout(() => {
            history.push("/admin/allFeatures");
          }, 100);
          document.getElementById("featureForm").reset();
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
            <h5>Update Feature</h5>
          </div>
          <div className="card-body">
            <form
              action=""
              method="POST"
              id="featureForm"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <input type="hidden" name="id" value={id} />
              <div className="form-group">
                <label htmlFor="title">Feature Title</label>
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
                <label htmlFor="description">Feature Description</label>
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
                <label htmlFor="image">Feature Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={onFileSelect}
                />
                <p>Selected File: {oldImage}</p>
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
