import UserPic from '../assets/user.avif'

const TenantTable = () => {
  return (
    <div className="table-div">
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Lease Start</th>
            <th>Lease End</th>
            <th>Rent</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
        <tr className="tr">
              <td className="people">
                <img src={UserPic} alt="" />
                <div className="people-de">
                  <h5>oviawele promise</h5>
                  <p className="Contact">08071497374</p>
                </div>
              </td>
              <td>
                <h5>no 5 uromi edo state</h5>
              </td>
              <td><h5>11 july 2023</h5></td>
              <td><h5>11 july 2024</h5></td>
              <td>
                <h5>$200</h5>
              </td>
              <td>
                <h5 className="active-click">active</h5>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TenantTable;
