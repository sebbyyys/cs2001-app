import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';

import DashNav from './DashNav.js';

function Dashboard() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <DashNav />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;