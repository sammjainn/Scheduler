import React, { Component } from 'react';
import '../Styles/AddSlot.css';
import axios from 'axios';
class AddSlot extends Component {
  state = {
    formObj: {
      teacher: '',
      class: '',
      date: '',
      startTime: '',
      endTime: ''
    },
    initialForm: '',
    toggleState: this.props.toggleState
  };

  // componentDidMount() {
  //   let obj = this.initForm();
  //   this.setState({ initialForm: obj });
  // }
  // initForm = () => {
  //   let obj = this.state.formObj;
  //   let props = this.props;
  //   if (props.teacher) obj.teacher = props.teacher;
  //   if (props.class) obj.class = props.class;
  //   if (props.date) obj.date = props.date;
  //   if (props.startTime) obj.startTime = props.startTime;
  //   if (props.endTime) obj.endTime = props.endTime;
  //   return obj;
  // };
  addSlot = (e) => {
    e.preventDefault();
    let dataObj = this.state.formObj;
    axios.post('http://localhost:5000/addslot', dataObj).then(
      (data) => {
        alert('New slot created successully');
        console.log(data);
      },
      (error) => {
        alert(
          'Failed to create slot due to overlapping or invalid values, please try again'
        );
        console.log(error);
      }
    );
    this.state.toggleState();
  };
  render() {
    // console.log(this.state.formObj.date);

    return (
      <div className='modal__overlay'>
        <div className='modal__container'>
          <form className='modal__form'>
            <div className='modal__formGroup'>
              <label>Choose teacher:</label>
              <select
                name='teacher'
                onChange={(e) => {
                  let obj = this.state.formObj;
                  obj.teacher = Number(e.target.value);
                  this.setState({ formObj: obj });
                }}
                defaultValue={this.state.formObj.teacher}
              >
                {' '}
                <option disabled selected value=''>
                  Select option
                </option>
                <option value='1'>Sheldon</option>
                <option value='2'>Sherlock</option>
                <option value='3'>Watson</option>
                <option value='4'>Penny</option>
                <option value='5'>Peralta</option>
              </select>
            </div>

            <div className='modal__formGroup'>
              <label>Class details: </label>
              <input
                type='text'
                defaultValue={this.state.formObj.class}
                name='class'
                onChange={(e) => {
                  let obj = this.state.formObj;
                  obj.class = e.target.value;
                  this.setState({ formObj: obj });
                }}
                placeholder='Enter description'
              />
            </div>

            <div className='modal__formGroup'>
              <label>Choose date: </label>
              <input
                name='date'
                type='date'
                defaultValue={this.state.formObj.date}
                onChange={(e) => {
                  let obj = this.state.formObj;
                  obj.date = e.target.value;
                  this.setState({ formObj: obj });
                }}
              />
            </div>

            <div className='modal__formGroup'>
              <label>Start time: </label>
              <input
                type='time'
                min='00:00'
                max='23:00'
                name='startTime'
                defaultValue={this.state.formObj.startTime}
                onChange={(e) => {
                  let obj = this.state.formObj;
                  obj.startTime = e.target.value;
                  this.setState({ formObj: obj });
                }}
              />
            </div>

            <div className='modal__formGroup'>
              <label>End time: </label>
              <input
                type='time'
                min='00:00'
                max='23:00'
                name='endTime'
                defaultValue={this.state.formObj.endTime}
                onChange={(e) => {
                  let obj = this.state.formObj;
                  obj.endTime = e.target.value;
                  this.setState({ formObj: obj });
                }}
              />
            </div>

            <div className='modal__actions'>
              <button className='modal__close' onClick={this.state.toggleState}>
                Close
              </button>
              <button
                className='modal__submit'
                type='submit'
                onClick={this.addSlot}
              >
                Add slot
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSlot;
