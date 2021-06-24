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
    initialForm: ''
  };

  async componentDidMount() {
    let obj = this.initForm();
    this.setState({ initialForm: obj });
  }
  initForm = () => {
    let obj = this.state.formObj;
    let props = this.props;
    if (props.teacher) obj.teacher = props.teacher;
    if (props.class) obj.class = props.class;
    if (props.date) obj.date = props.date;
    if (props.startTime) obj.startTime = props.startTime;
    if (props.endTime) obj.endTime = props.endTime;
    return obj;
  };
  addSlot = (e) => {
    e.preventDefault();
    let dataObj = this.state;
    axios.post('http://localhost:5000/addslot', dataObj).then((data) => {
      alert('new slot created');
      console.log(data);
    });
    this.setState();
  };
  render() {
    console.log(this.state);

    return (
      <div className='modal__overlay'>
        <div className='modal__container'>
          <form className='modal__form'>
            <div className='modal__formGroup'>
              <label>Choose teacher</label>
              <select
                name='teacher'
                onChange={(e) => {
                  this.setState({ teacher: Number(e.target.value) });
                }}
              >
                <option value='1'>teacher 1</option>
                <option value='2'>teacher 2</option>
                <option value='3'>teacher 3</option>
                <option value='4'>teacher 4</option>
                <option value='5'>teacher 5</option>
              </select>
            </div>

            <div className='modal__formGroup'>
              <label>Class details: </label>
              <input
                type='text'
                value={this.state.formObj.class}
                name='class'
                onChange={(e) => {
                  this.setState({ class: e.target.value });
                }}
                placeholder='Enter description'
              />
            </div>

            <div className='modal__formGroup'>
              <label>Choose date: </label>
              <input
                name='date'
                type='date'
                value={this.state.formObj.date}
                onChange={(e) => {
                  this.setState({ date: e.target.value });
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
                value={this.state.formObj.startTime}
                onChange={(e) => {
                  this.setState({ startTime: e.target.value });
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
                value={this.state.formObj.endTime}
                onChange={(e) => {
                  this.setState({ endTime: e.target.value });
                }}
              />
            </div>

            <button
              className='modal__submit'
              type='submit'
              onClick={this.addSlot}
            >
              Add slot
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSlot;
