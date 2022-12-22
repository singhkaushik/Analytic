import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Papa from "papaparse";
import "./css/Analytic.css";
const UploadView = () => {
  const [dropActive, setDropActive] = React.useState(true);
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDropActive(true);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };
  //

  // async function addMovieHandler(movie) {
  //   const response = await fetch(
  //     "https://test-28709-default-rtdb.firebaseio.com/movies.json",
  //     {
  //       method: "POST",
  //       // body: JSON.stringify(movie),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }
  //
  const [fileChangeHandler, setFileChangehandler] = useState("");
  const file_NameHandler = (event) => {
    let textv = event.target.value;
    console.log(textv);
  };

  //
  //
  const [csvFile, setCSVFile] = useState();
  const sendRequst = async () => {
    try {
      const res = await axios.post("http://localhost:5000", { body: csvFile });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(csvFile);
    sendRequst();
  };
  //
  //
  const uploadFile = (e) => {
    let file = e.target.files[0];
    // fileData["fileName"] = file[0].name;
    setFileChangehandler(file.name);
    const files = e.target.files;
    console.log(files);
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        complete: function (results) {
          console.log("Finished:", results.data);
        },
      });
    }
  };
  const inputRef = React.useRef(null);

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td className="td1">
              <div>
                <Link to="/addModel">
                  <button className="upload_btn">Upload</button>
                </Link>
              </div>
            </td>
            <td className="td2">
              <div>
                <input
                  type="text"
                  onChange={file_NameHandler}
                  id="file_name"
                  value={fileChangeHandler}
                  className="text_box"
                  placeholder="  Upload CSV,JSON,XML or provide data URL"
                ></input>
                <button name="import" className="btn" onClick={handleSubmit}>
                  Import
                </button>
                <form
                  id="form-file-upload"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    id="input-file-upload"
                    multiple={true}
                    onChange={uploadFile}
                  />
                  <label id="label-file-upload" htmlFor="input-file-upload">
                    <div>
                      <p>Drop file here to upload....</p>
                      <p>or</p>
                      <button className="upload-button" onClick={onButtonClick}>
                        +
                      </button>
                    </div>
                  </label>
                  {dropActive && (
                    <div id="drop-file-element" onDrop={handleDrop}></div>
                  )}
                </form>
                <button className="cancel_btn">Cancel</button>
                <Link to="/transform">
                  <button className="btn">Next</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default UploadView;
