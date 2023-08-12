/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./DragDropFiles.css";
import imgpng from "../../img/image.png";
import drag from "../../img/drag2.png";

const DragDropFiles = () => {
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

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions py-5">
          <button className="btn btn-danger" onClick={() => setFiles(null)}>Cancel</button>
          <button className="btn btn-info" onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <div className="bg-theme-d">
      <div className="bg-theme-d pt-5 container">
        <h4 className="text-light text-start fw-light pt-5">
          1. Input your text or File :
        </h4>
        <div id="Music" className="py-5">
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
        </div>
      </div>

      
      <div className="text-light pt-4 pb-5 container">
        <div className="w-100 ">
          <div className="w-50 d-flex flex-column my-5">
            <h4 className="text-light text-start fw-light">
              2. Select an Encryptton or Decryption Algorithm :
            </h4>
            <div class="dropdown me-auto pt-4">
              <button
                class="btn btn-light dropdown-toggle ms-0 rounded-1 px-5 py-2"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Encryptton or Decryptton Algorithm
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                <li>
                  <a class="dropdown-item active" href="#">
                    AES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    RSA
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ljflsadl
                  </a>
                </li>
                <li></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-100 pt-5">
            <h4 className="text-light text-start fw-light">
              3. Insert Encryptton or Decryption key :
            </h4>
            <div class="row g-3 align-items-center pt-4 mx-auto">
              <div class="col-auto">
                <label for="inputPassword6" class="col-form-label" >
                Public  Key :
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
        </div>
      </div>


      <div className="text-light pb-5 container">
        <div className="w-100 ">
        <h4 className="text-light text-start fw-light pt-5">
          4. Download your file :
        </h4>
        <h5 className="pt-5 text-info  text-start">  1. Text file.txt</h5>
        <div className=" py-4 ms-0 d-flex">
          
          <button className="btn btn-light px-5" onClick={handleUpload}>Download</button>
          <button className="btn btn-danger px-5 ms-4" onClick={() => setFiles(null)}>Cancel</button>
        </div>
      </div> 
        
      </div>
    </div>
  );
};

export default DragDropFiles;
