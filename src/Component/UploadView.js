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
  const [fileChangeHandler, setFileChangehandler] = useState("");
  const file_NameHandler = (event) => {
    let textv = event.target.value;
    console.log(textv);
  };

  //
  //
  const [csvValue, setCsvValue] = useState("");

  const uploadFile = (e) => {
    let file = e.target.files[0];
    // fileData["fileName"] = file[0].name;
    setFileChangehandler(file.name);
    const files = e.target.files;
    console.log(files);
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        complete: function data(results) {
          console.log("Finished:", results.data);
          const val = results.data;
          setCsvValue(val);
        },
      });
    }
  };
  const [state, setState] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  const onClickHandler = () => {
    const data = new FormData();
    data.append("file", state.selectedFile);
    axios
      .post("http://localhost:4000/test", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
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
                <button name="import" onClick={onClickHandler} className="btn">
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
