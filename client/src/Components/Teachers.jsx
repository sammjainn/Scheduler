import React, { Component } from 'react';
import '../Styles/Teachers.css';

class Teachers extends Component {
  state = {
    teachers: [
      { id: 1, name: 'Sheldon' },
      { id: 2, name: 'Sherlock' },
      { id: 3, name: 'Watson' },
      { id: 4, name: 'Penny' },
      { id: 5, name: 'Peralta' }
    ]
  };
  showCalendar = () => {};
  render() {
    return (
      <React.Fragment>
        <h1>Class Scheduler</h1>
        <h3 className='heading'>Teachers:</h3>
        <div className='teachers'>
          {this.state.teachers.map((teacherObj) => {
            return (
              <div
                className='teacher'
                key={teacherObj.id}
                onClick={this.showCalendar}
              >
                {teacherObj.name}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Teachers;
