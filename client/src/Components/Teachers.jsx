import React, { Component } from 'react';
import '../Styles/Teachers.css';
import { Link } from 'react-router-dom';

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
  render() {
    return (
      <React.Fragment>
        <h1>Class Scheduler</h1>
        <h3 className='teachers__heading'>Teachers:</h3>
        <div className='teachers__all'>
          {this.state.teachers.map((teacherObj) => {
            return (
              <Link
                className='teachers__teacher'
                key={teacherObj.id}
                to={{
                  pathname: `/teacher/${teacherObj.id}`,
                  teacherObj: teacherObj
                }}
              >
                <div className='teachers__teacherDiv'>{teacherObj.name}</div>
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Teachers;
