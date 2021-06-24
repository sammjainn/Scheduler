import React, { Component } from 'react';
import '../Styles/AddSlot.css';

class AddSlot extends Component {
  state = {};
  render() {
    return (
      <div className='modal__overlay'>
        <div className='modal__container'>
          <form className='modal__form'>
            <select id='dropdown' name='dropdown'>
              <option disabled selected value=''>
                Select teacher
              </option>
              <option value='1'>teacher 1</option>
              <option value='2'>teacher 2</option>
              <option value='3'>teacher 3</option>
              <option value='4'>teacher 4</option>
              <option value='5'>teacher 5</option>
            </select>
            <input
              type='text'
              value=''
              onChange={this.onChange}
              placeholder='Enter description'
            />
            <input type='date' value='2021-06-24' onChange={this.onChange} />

            <input
              type='time'
              min='01:00'
              max='24:00'
              onChange={this.onChange}
            />
            <input
              type='time'
              min='01:00'
              max='24:00'
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddSlot;
