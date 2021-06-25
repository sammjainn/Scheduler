import React, { Component } from 'react';
import Days from './Days';
import Weeks from './Weeks';
import Months from './Months';
import '../Styles/Calendar.css';
import axios from 'axios';
import AddSlot from './AddSlot';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons';

class Calendar extends Component {
  state = {
    viewStates: {
      dayView: true, // default
      weekView: false,
      monthView: false
    },
    allSlots: [],
    showModal: false,
    teacherObj: ''
  };

  async componentDidMount() {
    // from <Link>
    // let teacherId = this.props.match.params.teacherid;
    let teacherObj = this.props.location.teacherObj;

    axios.get(`http://localhost:5000/getslots/${teacherObj.id}`).then(
      (response) => this.setState({ allSlots: response.data }),
      (err) => console.log(err)
    );

    this.setState({ teacherObj: teacherObj });
    console.log(teacherObj);
    // const dataObj = { task: teacherObj.name };
    // axios
    //   .post('http://localhost:5000/addTask', { task: teacherObj.name })
    //   .then((data) => console.log(data));
  }

  changeView = (time) => {
    let newStates = {
      dayView: false,
      weekView: false,
      monthView: false
    };
    newStates[time] = true;
    this.setState({ viewStates: newStates });
  };

  toggleState = () => {
    this.setState({ showModal: false });
  };

  render() {
    let viewStates = this.state.viewStates;
    let view;
    if (viewStates.dayView) view = <Days allSlots={this.state.allSlots} />;
    else if (viewStates.weekView)
      view = <Weeks allSlots={this.state.allSlots} />;
    else if (viewStates.monthView)
      view = <Months allSlots={this.state.allSlots} />;

    return (
      <React.Fragment>
        <ul className='calendar__menu'>
          <Link to='/' className='prevPage'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <li
            className='days calendar__menuOptions'
            onClick={() => {
              this.changeView('dayView');
            }}
          >
            Day
          </li>
          <li
            className='weeks calendar__menuOptions'
            onClick={() => {
              this.changeView('weekView');
            }}
          >
            Week
          </li>
          <li
            className='months calendar__menuOptions'
            onClick={() => {
              this.changeView('monthView');
            }}
          >
            Month
          </li>
          <li
            className='addSlot'
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </li>
        </ul>

        {view}

        {this.state.showModal ? (
          <AddSlot
            teacher={this.state.teacherObj.id}
            toggleState={this.toggleState}
          />
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  }
}

export default Calendar;
