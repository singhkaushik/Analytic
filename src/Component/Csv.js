import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCSVReader, formatFileSize, usePapaParse } from "react-papaparse";
import Papa from "papaparse";
import "./css/Analytic.css";

const UploadView = () => {
  const [csvValue, setCsvValue] = React.useState("");
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
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  //
  const [fileChangeHandler, setFileChangehandler] = useState("");
  const file_NameHandler = (event) => {
    setUrl = event.target.value;
    console.log(url);
  };

  //
  //
  //
  const [csvFile, setCSVFile] = useState();
  //
  const { readRemoteFile } = usePapaParse();
  const { url, setUrl } = useState("");

  const handleReadRemoteFile = () => {
    readRemoteFile(url, {
      complete: (results) => {
        console.log("---------------------------");
        console.log("Results:", results);
        console.log("---------------------------");
      },
    });
  };
  //
  const componentDidMount = async () => {
    const url = "http://localhost:4000/test";
    await fetch(url, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(csvValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //
  const uploadFile = (e) => {
    let file = e.target.files[0];
    setFileChangehandler(file.name);
    const files = e.target.files;
    console.log(files);
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        complete: function (results) {
          let data = results.data;
          console.log("Finished:", data);
        },
      });
    }
  };
  const inputRef = React.useRef(null);
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
                  onChange={handleReadRemoteFile}
                  id="file_name"
                  value={setUrl}
                  className="text_box"
                  placeholder="  Upload CSV,JSON,XML or provide data URL"
                ></input>
                <button
                  name="import"
                  className="btn"
                  onClick={componentDidMount}
                >
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
                  <CSVReader
                    onUploadAccepted={(results) => {
                      console.log("---------------------------");
                      console.log(results);
                      setCsvValue(results.data);
                      console.log("---------------------------");
                      setZoneHover(false);
                    }}
                    onDragOver={(event) => {
                      event.preventDefault();
                      setZoneHover(true);
                    }}
                    onDragLeave={(event) => {
                      event.preventDefault();
                      setZoneHover(false);
                    }}
                  >
                    {({
                      getRootProps,
                      acceptedFile,
                      ProgressBar,
                      getRemoveFileProps,
                      Remove,
                    }) => (
                      <div {...getRootProps()}>
                        {acceptedFile ? (
                          <div>
                            <div>
                              <span>{formatFileSize(acceptedFile.size)}</span>
                              <span>{acceptedFile.name}</span>
                            </div>
                            <div>
                              <ProgressBar />
                            </div>
                            <div
                              {...getRemoveFileProps()}
                              onMouseOver={(event) => {
                                event.preventDefault();
                              }}
                              onMouseOut={(event) => {
                                event.preventDefault();
                              }}
                            >
                              <Remove />
                            </div>
                          </div>
                        ) : (
                          <label>
                            <div>
                              <p>Drop file here to upload....</p>
                              <p>or</p>
                              <button className="upload-button">+</button>
                            </div>
                          </label>
                        )}
                      </div>
                    )}
                  </CSVReader>

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