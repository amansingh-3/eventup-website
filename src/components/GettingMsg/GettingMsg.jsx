import aa from "../../assets/aa.jpg";
import "./GettingMsg.css";

const GettingMsg = () => {
  return (
    <>
      <section className="getting-msg">
        <div className="container">
          <div className="getting-msg-row-wrapper">
            <div className="col-getting-msg-profile">
              <div className="image-founder">
                <img src={aa} alt="profile-img" />
              </div>
              <div className="founder-name">
                <h2 className="h3">Aman Singh</h2>
                <p>Founder & CEO EventUp</p>
              </div>
            </div>

            <div className="col-getting-msg-content">
              <h2>
                Our goal is to build software that enables users who need it to
                launch their products in this pandemic and all-digital time
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GettingMsg;
