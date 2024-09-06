import "../style/tenant.css";
import TenantTable from "./tenantTable";
import PopupFrom from "../components/popupTenant";
import "../style/model.css";
import { useState } from "react";

const TenantsPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <main>
      <div className="top-main">
        <div className="top-main-left">
          <input type="text" placeholder="search" className="searchInput" />
          <select name="" id="">
            <option value="" hidden>
              Filter
            </option>
            <option value="">Gender</option>
            <option value="">Age</option>
            <option value="">Role</option>
          </select>
        </div>
        <button className="tenant-btn btn2" onClick={toggleModal}>
          Add Tenants
        </button>
      </div>
      <TenantTable />
      <PopupFrom isModalVisible={isModalVisible} toggleModal={toggleModal} />
      <div>

      </div>
    </main>
  );
};

export default TenantsPage;
