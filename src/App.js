import React, {Component} from 'react';
import Calendar from './components/Calendar';
import {addDays} from 'date-fns';
import NameForm from './components/NameForm';
import update from 'react-addons-update'
import axios from 'axios';
import './App.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

class App extends Component {
  // default 날짜 수정하시면 됩니다.
  // null 설정시에 전체범위로 되니 주의하세요.
  state = {
    name: '',
    ranges: [
      {
        startDate: addDays(new Date(), 2),
        endDate: addDays(new Date(), 4)
      }
    ]
  }
  // nameForm
  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  // Calendar
  handleRangeChange = (e) => {
    var key = Object.getOwnPropertyNames(e)[0]
    console.log(e);

    var index = Number(key.charAt(key.length - 1));

    this.setState({
      ranges: update(this.state.ranges, {
        [index-1]: {
          startDate: {
            $set: e[key].startDate
          },
          endDate: {
            $set: e[key].endDate
          }
        }
      })
    })
  }

  // Calendar Create
  handleCreate = () => {
    const {ranges} = this.state;
    this.setState({
      ranges: ranges.concat({
        startDate: addDays(new Date(), 7),
        endDate: addDays(new Date(), 8)
      })
    })
  }

  handleRemove = () => {
    const {ranges} = this.state;

    if ((ranges.length) !== 0) {
      this.setState({
        ranges: ranges.slice(0, ranges.length-1)
      })
    }
    console.log(ranges.length-1);
  }
  // Submit.. POST
  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      ranges: this.state.ranges
    };

    // POST URL, parameter 이 부분 변경하시면 됩니다.
    axios.post(`http://localhost:3001/name`, {user}).then(res => {
      console.log(res);
      console.log(res.data); // {response:"hi"}
    });
    // alert 테스트 용입니다. 삭제하고 사용하세요.
    alert('name: ' + user.name + '\ndate: ' + JSON.stringify(user.ranges) + '\nsubmitted');
  }

  render() {
    const {input, ranges} = this.state;
    const {handleNameChange, handleRangeChange, handleSubmit, handleCreate, handleRemove} = this;

    return (<div className="App">
      <NameForm value={input} onChange={handleNameChange}/>
      <Calendar range={ranges} onChange={handleRangeChange}/>
      <div>
        <button className="Btn-date" onClick={handleCreate}>일정 추가</button>
        <button className="Btn-date" onClick={handleRemove}>일정 삭제</button>
        <form onSubmit={handleSubmit}>
          <button className="Btn-complete" type="submit">완료</button>
        </form>
      </div>

    </div>)
  }
}

export default App;

// SendButton Component화 시키실 거면 components/SendButton.js 쓰셔도 됩니다.
// 필요없으시면 지우셔도 무방합니다.
