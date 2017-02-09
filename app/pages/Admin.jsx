import React, { Component } from 'react';
import Page from '../pages/Page';
import AdminContainer from '../containers/Admin';

class Admin extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Admin | reactGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A reactGo example of life' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <AdminContainer {...this.props} />
      </Page>
    );
  }
}

export default Admin;
