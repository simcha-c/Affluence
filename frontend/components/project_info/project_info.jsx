import React from 'react';
import { Link } from 'react-router-dom';
import ColumnsContainer from '../columns/columns_container';

class ProjectInfo extends React.Component {

  render() {
    return (
      <section className="project-section">
        <ColumnsContainer />
      </section>
    );
  }

}

export default ProjectInfo;
