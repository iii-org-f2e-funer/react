import React from 'react';
import OMPsidePage from '../components/chatroom/components/OMPsidePage';
import OMPdetail from '../components/chatroom/components/OMPdetail';

import '../styles/chatroom/openMemberPage.scss';

class OpenMemberPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="OpenMemberPage">
        <div className="container d-flex">
          <OMPsidePage />
          <OMPdetail />
        </div>
      </div>
    );
  }
}

export default OpenMemberPage;
