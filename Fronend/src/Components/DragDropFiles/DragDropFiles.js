/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./DragDropFiles.css";
import Select from "react-select";
import drag from "../../img/drag2.png";

const dropListItem = [
  {
    value: 1,
    label: "RSA",
  },
  {
    value: 2,
    label: "AES",
  },
  {
    value: 3,
    label: "Vigenere Algorithm",
  },
  {
    value: 4,
    label: "Hill Cypher",
  },

  {
    value: 5,
    label: "Caesar cipher",
  },
];

const DragDropFiles = () => {
  const [valueEn, setValueEn] = useState(dropListItem.label);
  const [valueDe, setValueDe] = useState(dropListItem.label);
  const DropActionEn = (e) => {
    setValueEn(e.label);
  };
  const DropActionDe = (e) => {
    setValueDe(e.label);
  };
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  // if (files)
  //   return (
  //     <div className="uploads">
  //       <ul>
  //         {Array.from(files).map((file, idx) => (
  //           <li key={idx}>{file.name}</li>
  //         ))}
  //       </ul>
  //       <div className="actions py-5">
  //         <button className="btn btn-danger" onClick={() => setFiles(null)}>Cancel</button>
  //         <button className="btn btn-info" onClick={handleUpload}>Upload</button>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="bg-theme-d">
      <div className="bg-theme-d pt-5 container">
        <h4 className="text-light text-start fw-light pt-5 pb-4">
          1. Insert your text  :
        </h4>
        {/* <div id="Music" className="py-5">
          <div className="p-3 bg-white container rounded-3">
            <div
              className="dropzone active-d container rounded-3 "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <img src={drag} alt="" width="140px" height="100px" />
              <h1 className="fs-5 my-3">
                Drag and Drop file
                <br />
              </h1>

              <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept="image/png, image/jpeg"
                ref={inputRef}
              />
              <button
                className="btn btn-p text-light px-4 d-flex py-2"
                onClick={() => inputRef.current.click()}
              >
                <DriveFolderUploadIcon />
                <p className="my-auto ms-2"> Choose image or file</p>
              </button>
            </div>
          </div>
        </div> */}
        <div>
          <div class="form-floating">
            <textarea
              class="form-control h-100p"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            
            ></textarea>
            <label for="floatingTextarea2">Text </label>
          </div>
        </div>
        {files && (
          <div className="uploads">
            <ul>
              {Array.from(files).map((file, idx) => (
                <li className="text-light pt-5" key={idx}>
                  {file.name}
                </li>
              ))}
            </ul>
            <div className="actions py-4 ">
              <button
                className="btn btn-danger px-4 "
                onClick={() => setFiles(null)}
              >
                Cancel
              </button>
              {/* <button className="btn btn-info px-4" onClick={handleUpload}>Upload</button> */}
            </div>
          </div>
        )}
      </div>

      <div className="container w-100 d-flex gap-5">
        <div className="w-50 d-flex flex-column">
          <div className=" pt-4 pb-5 ">
            <div className="w-100 ">
              <div className="w-100 d-flex flex-column my-5">
                <h2 className="text-info text-start p-3 border border-info fw-light">
                  Encryption
                </h2>
                <h4 className="text-light text-start fw-light pt-4">
                  2. Select an Encryption Algorithm :
                </h4>
                <div class="me-auto pt-4 w-50">
                  <Select options={dropListItem} onChange={DropActionEn} />
                </div>
              </div>
              {valueEn === "RSA" && (
                <div className="w-100 pt-5">
                  <h4 className="text-light text-start fw-light">
                    3. Insert Encryption keys :
                  </h4>
                  <div class="row g-3 align-items-center pt-4 mx-auto">
                    <div class="col-auto text-light">
                      <label for="inputPassword6" class="col-form-label">
                        Public Key ' e ' :
                      </label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        placeholder="Insert key"
                      />
                    </div>
                  </div>
                  <div class="row g-3 align-items-center pt-4 mx-auto">
                    <div class="col-auto text-light">
                      <label for="inputPassword6" class="col-form-label">
                        Public Key ' n ' :
                      </label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        placeholder="Insert key"
                      />
                    </div>
                  </div>
                </div>
              )}
              {valueEn !== "RSA" && (
                <div className="w-100 pt-5">
                  <h4 className="text-light text-start fw-light">
                    3. Insert Decryption keys :
                  </h4>

                  <div class="row g-3 align-items-center pt-4 mx-auto">
                    <div class="col-auto text-light">
                      <label for="inputPassword6" class="col-form-label">
                        Key value :
                      </label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        placeholder="Insert key"
                      />
                    </div>
                  </div>

                
                </div>
              )}
            </div>
          </div>
          <button className="btn btn-info px-5 py-2 fs-4 me-auto my-4">Encryption</button>
          <div className="text-light pb-5 ">
            <div className="w-100 ">
              <h4 className="text-light text-start fw-light pt-5">
                4. Download your file :
              </h4>
              <h5 className="pt-5 text-info  text-start"> 1. Text file.txt</h5>
              <div className=" py-4 ms-0 d-flex">
                <button className="btn btn-light px-5" onClick={handleUpload}>
                  Download
                </button>
                <button
                  className="btn btn-danger px-5 ms-4"
                  onClick={() => setFiles(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-50 d-flex flex-column">
          <div className=" pt-4 pb-5 ">
            <div className="w-100 ">
              <div className="w-100 d-flex flex-column my-5">
                <h2 className="text-info text-end border border-info p-3 fw-light">
                  Decryption
                </h2>
                <h4 className="text-light text-end fw-light pt-4">
                  2. Select an Decryption Algorithm :
                </h4>
                <div class="ms-auto pt-4 w-50">
                  <Select options={dropListItem} onChange={DropActionDe} />
                </div>
              </div>
              {valueDe === "RSA" && (
                <div className="w-100 pt-5 d-flex flex-column">
                  <h4 className="text-light text-end fw-light">
                    3. Insert Decryption key :
                  </h4>
                  <div class=" row g-3 align-items-center pt-4 ms-auto">
                    <div class="col-auto text-light">
                      <label for="inputPassword6" class="col-form-label">
                        Public Key ' e ' :
                      </label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        placeholder="Insert key"
                      />
                    </div>
                  </div>
                  <div class=" row g-3 align-items-center pt-4 ms-auto">
                    <div class="col-auto text-light">
                      <label for="inputPassword6" class="col-form-label">
                        Public Key ' d ' :
                      </label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        placeholder="Insert key"
                      />
                    </div>
                  </div>
                </div>
              )}
              {valueDe !== "RSA" && (
                <div className="w-100 pt-5 d-flex flex-column">
                  <h4 className="text-light text-end fw-light">
                    3. Insert Decryption key :
                  </h4>

                  <div class=" row g-3 align-items-center pt-4 ms-auto">
                    <div class="col-auto text-light">
                      <label for="inputPassword6" class="col-form-label">
                        key value :
                      </label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        placeholder="Insert key"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="btn btn-info px-5 py-2 fs-4 ms-auto my-4">Decryption</button>
          <div className="text-light pb-5 d-flex flex-column ">
            <div className="w-100 ">
              <h4 className="text-light text-end fw-light pt-5">
                4. Download your file :
              </h4>
              <h5 className="pt-5 text-info  text-end"> 1. Text file.txt</h5>
            </div>
            <div className=" py-4 ms-auto d-flex">
              <button className="btn btn-light px-5" onClick={handleUpload}>
                Download
              </button>
              <button
                className="btn btn-danger px-5 ms-4"
                onClick={() => setFiles(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDropFiles;
