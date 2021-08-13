import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";

export default function AllFeatures() {
  let [features, setFeatures] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8000/api/features")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteFeature(id) {
    if (id) {
      fetch("http://localhost:8000/api/features/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            alert("Feature deleted successfully.");
          }
          features = features.filter((item) => item.id !== id);
          setFeatures(features);
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
            <h5>All Features</h5>
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
                {features.map((feature, index) => {
                  return (
                    <tr key={"id-" + index}>
                      <td>{index + 1}</td>
                      <td>{feature.title}</td>
                      <td>{feature.description}</td>
                      <td>{new Date(feature.created_at).toLocaleString()}</td>
                      <td style={{ width: "200px" }}>
                        <Link
                          to={"/admin/editFeature/" + feature.id}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger ml-2"
                          onClick={() => deleteFeature(feature.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {!features.length && (
                  <tr>
                    <td colSpan="6" className="text-danger">
                      No features found!
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
