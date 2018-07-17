import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';
import { fetchTeam, deleteTeam } from '../../../actions/team_actions';
import { openDropdown } from '../../../actions/dropdown_actions';
import Navbar from './navbar';



const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    teams: state.entities.teams,
    dropdown: state.ui.dropdown.open,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchTeam: (id) => dispatch(fetchTeam(id)),
    openDropdown: () => dispatch(openDropdown()),
    deleteTeam: (id) => dispatch(deleteTeam(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
