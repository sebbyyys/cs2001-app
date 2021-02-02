import React, { Component } from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import ChartistGraph from 'react-chartist';


import DashNav from './DashNav.js';
import CardsSection from './CardsSection';

class Dashboard extends Component {
  render() {
    let dataPie = {
      labels: ["40%", "5%", "15%", "40%"],
      series: [40, 5, 15, 40]
    }
    let dataSales = {
      labels: [
        "9:00AM",
        "12:00AM",
        "3:00PM",
        "6:00PM",
        "9:00PM",
        "12:00PM",
        "3:00AM",
        "6:00AM"
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308]
      ]
    }


    return (
      <div className="content">
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm-5 ms-xl1">
              <DashNav />
            </div>
            <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
              <div className="ms-Grid-row">
                <CardsSection />
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm4 ms-xl3 main-element">
                  <div className="card ">
                    <div className="card-header ">
                      <h4 className="card-title">Title</h4>
                      <p className="card-category">Sub-Heading</p>
                    </div>
                    <div className="card-body ">
                      <ChartistGraph data={dataPie} type="Pie" />
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> 1
                          <i className="fa fa-circle text-danger"></i> 2
                          <i className="fa fa-circle text-warning"></i> 3
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-clock-o"></i> Updated ___ Ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-sm8 ms-xl8 main-element">
                  <div className="card">
                    <div className="card-header ">
                      <h4 className="card-title">Title</h4>
                      <p className="card-category">Sub-Heading</p>
                    </div>
                    <div className="card-body ">
                      <ChartistGraph data={dataSales} type="Line" />
                    </div>
                    <div className="card-footer ">
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> 1
                    <i className="fa fa-circle text-danger"></i> 2
                    <i className="fa fa-circle text-warning"></i> 3
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-history"></i> Updated ___ Ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      

    );
  }
}

export default Dashboard;