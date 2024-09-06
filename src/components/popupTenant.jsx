import "../style/model.css";

const TeantFrom = ({ isModalVisible, toggleModal }) => {
  return (
    <div className={`modal-overlay popup ${isModalVisible ? "visible" : ""}`}>
      <div className="popup-to-add">
        <form action="" className="addStaffForm">
          <div className="formRow">
            <div className="formControl">
              <label for="fName">Full Name</label>
              <input type="text" id="fName" />
            </div>

            <div className="formControl">
              <label for="sex">Sex</label>
              <input type="text" id="sex" list="datalist" />
            </div>
            <datalist id="datalist">
              <option value="Male"></option>
              <option value="Female"></option>
            </datalist>
            <div className="formControl">
              <label for="email">Email Address</label>
              <input type="text" id="email" />
            </div>
            <div className="formControl">
              <label for="phoneNo">Phone Number</label>
              <input type="text" id="phoneNo" />
            </div>
            <div className="formControl">
              <label for="dob">Date of Birth</label>
              <input type="date" id="dob" />
            </div>
            <div className="formControl">
              <label for="address">Residential Address</label>
              <input type="text" id="address" />
            </div>
            <div className="formControl">
              <label for="rent">Rent</label>
              <input type="text" id="rent" />
            </div>
          </div>
          <div className="formRow">
            <div className="others">
              <h2>Others</h2>
              <i className="bx bxs-x-circle btn3" onClick={toggleModal}></i>
            </div>
            <div className="formControl">
              <label for="position">Lease Start</label>
              <input type="date" id="Lease-start" />
            </div>
            <div className="formControl">
              <label for="position">Lease End</label>
              <input type="date" id="Lease-End" />
            </div>
            <div className="formControl">
              <label for="nationality">Nationality</label>
              <input type="text" id="nationality" />
            </div>
            <div className="formControl">
              <label for="originState">State of Origin</label>
              <input type="text" id="originState" />
            </div>
            <div className="formControl">
              <label for="lga">Local Government Area</label>
              <input type="text" id="lga" />
            </div>
            <p className="message"></p>
            <button className="tenant-btn">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeantFrom;
