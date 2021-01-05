import React from 'react';
import './NameForm.css';

const NameForm = ({value, onChange}) => {
  return (
    <div className="form">
      <h1 className="h1-tc">이름과 일정을 입력해주세요.</h1><br/>
      <input type="search" onChange={onChange} value={value}/>
    </div>
  );
}

export default NameForm;
