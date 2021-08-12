import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";

export default function AllSliders() {
  let [sliders, setSliders] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8000/api/sliders")
      .then((res) => res.json())
      .then((data) => {
        setSliders(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteSlider(id) {
    if (id) {
      fetch("http://localhost:8000/api/sliders/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            alert("Slider deleted successfully.");
          }
          sliders = sliders.filter((item) => item.id !== id);
          setSliders(sliders);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <AdminHeader />
      <div className="container p-3">
        <div className="card mt-5">
          <div className="card-header">
            <h5>All Sliders</h5>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sliders.map((slider, index) => {
                  return (
                    <tr key={"id-" + index}>
                      <td>{index + 1}</td>
                      <td>{slider.title}</td>
                      <td>{slider.description}</td>
                      <td>{new Date(slider.created_at).toLocaleString()}</td>
                      <td style={{ width: "200px" }}>
                        <Link
                          to={"/admin/editSlider/" + slider.id}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger ml-2"
                          onClick={() => deleteSlider(slider.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {!sliders.length && (
                  <tr>
                    <td colSpan="6" className="text-danger">
                      No sliders found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
