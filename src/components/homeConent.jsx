import "../style/homeconent.css";
import Chart  from '../components/chart'
import MessageStrips from '../components/messagestrip'


const MainHome = () => {
  return (
    <main style={{ marginLeft: "250px" }}>
      <div className="top-div">
        <div className="properties">
          <div className="content">
            <h6>N/A</h6>
            <h2>Properties</h2>
          </div>
          <div className="icon">
            <i className="bx bx-building-house"></i>
          </div>
        </div>

        <div className="Tenants">
          <div className="content">
            <h6>N/A</h6>
            <h2>Tenants</h2>
          </div>
          <div className="icon">
            <i className="bx bx-body"></i>
          </div>
        </div>
        <div className="Clients">
          <div className="content">
            <h6>N/A</h6>
            <h2>Clients</h2>
          </div>
          <div className="icon">
            <i className="bx bxs-user"></i>
          </div>
        </div>
        <div className="workers">
          <div className="content">
            <h6>N/A</h6>
            <h2>workers</h2>
          </div>
          <div className="icon">
            <i className="bx bxs-user-account"></i>
          </div>
        </div>
      </div>


      <Chart />
      <MessageStrips/>
    </main>
  );
};

export default MainHome;
