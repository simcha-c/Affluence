import { connect } from 'react-redux';
import { fetchProject, createProject, updateProject, deleteProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchTeam } from '../../actions/team_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebar_actions';
import Sidebar from './sidebar';

const mapState = (state, ownProps) => {
  const team = state.entities.teams[ownProps.match.params.teamId] || { member_ids: [], project_ids: [] };
  team.project_ids = team.project_ids || [];

  let users = team.member_ids.map((member_id) => {
    return state.entities.users[member_id] || { id: member_id, first: " ", last: " ", photoUrl: "" };
  });

  // users = (users.includes(undefined) || users.length < 1 ) ? [] : users;

  const projects = team.project_ids.map(project_id => {
    return state.entities.projects[project_id] || { id: project_id };
  });

  const project = state.entities.projects[ownProps.match.params.projectId] || {};
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
    users,
    team,
    projects, // projects as array
    project,
    sidebar: state.ui.sidebar.open,
    // teams: Object.values(state.entities.teams), // teams as array // TODO: proptypes
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchTeam: (id) => dispatch(fetchTeam(id)),
    createProject: (project) => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    closeSidebar: () => dispatch(closeSidebar()),
    openModal: (formType) => dispatch(openModal(formType)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Sidebar));
