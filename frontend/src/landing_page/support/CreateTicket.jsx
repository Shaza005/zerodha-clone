import React from "react";

function CreateTicket() {
  return (
    <div className="container my-5 mx-5">
      <div className="row">
        <div className="col-8">
          <div className="accordion mt-5 " id="accordionPanelsStayOpenExample">
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Account Opening
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Residential individual</li>
                    <li>Minor</li>
                    <li>Non Resident Indian</li>
                    <li>Company,Partnership,HUF and LLP</li>
                    <li>Glossary</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Your Zerodha Account
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <ul>
                    <li>Your Profile</li>
                    <li>Account modification</li>
                    <li>Non Resident Indian</li>
                    <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                    <li>Nomination</li>
                    <li>Transfer and conversion of securities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Kite
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <ul>
                    <li>IPO</li>
                    <li>Trading FAQs</li>
                    <li>Margin Trading Facility (MTF) and Margins</li>
                    <li>Charts and orders</li>
                    <li>Alerts and Nudges</li>
                    <li>General</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  Funds
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <ul>
                    <li>Add money</li>
                    <li>Withdraw money</li>
                    <li>Non Resident Indian</li>
                    <li>Add bank accounts</li>
                    <li>eMandates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  Console
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <ul>
                    <li>Portfolio</li>
                    <li>Corporate actions</li>
                    <li>Funds statement</li>
                    <li>Reports</li>
                    <li>Profile</li>
                    <li>Segments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSix"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSix"
                >
                  Coin
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSix"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <ul>
                    <li>Mutual funds</li>
                    <li>National Pension Scheme (NPS)</li>
                    <li>Features on Coin</li>
                    <li>Payments and Orders</li>
                    <li>General</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 p-5">
          <div
            className="card"
            style={{ backgroundColor: "rgba(248, 218, 186, 1)" ,borderRadius:"0%",width: "22rem"}}
          >
            <div className="card-body">
              <ul>
                <li>Latest Intraday leverages and Square-off timings</li>
                <br></br>
                <li>Surveillance measure on scrips - January 2026</li>
              </ul>
            </div>
          </div>
          <div className="card mt-4" style={{width: "22rem",borderRadius:"0%"}}>
            <div className="card-header">Quick links</div>
            <ol className="list-group list-group-numbered list-group-flush">
              <li className="list-group-item">Track account opening</li>
              <li className="list-group-item">Track segment activation</li>
              <li className="list-group-item">Intraday margins</li>
              <li className="list-group-item">Kite user manual</li>
              <li className="list-group-item">Learn how to create a ticket</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
