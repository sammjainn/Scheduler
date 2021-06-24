import React, { Component } from 'react';
import Days from './Days';
import Weeks from './Weeks';
import Months from './Months';
import '../Styles/Calendar.css';
import axios from 'axios';

class Calendar extends Component {
  state = {
    viewStates: {
      dayView: false,
      weekView: false,
      monthView: true // default
    },
    allSlots: []
  };

  async componentDidMount() {
    // from <Link>
    let teacherId = this.props.match.params.teacherid;
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

  addSlot = () => {};

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
          <li onClick={this.addSlot}>+</li>
        </ul>

        {view}
      </React.Fragment>
    );
  }
}

export default Calendar;
