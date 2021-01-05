// // import React, { Component } from 'react';
// //
// // class Foo extends Component {
// //   handleClick() {
// //     console.log('Click happened');
// //   }
// //   render() {
// //     return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
// //   }
// // }
// //
// // export default Foo;
//
// import React from 'react';
// import axios from 'axios';
//
// export default class SendButton extends React.Component {
//   state = {
//     name: ''
//   }
//
//   handleChange = event => {
//     this.setState({name: event.target.value});
//   }
//
//   handleSubmit = event => {
//     event.preventDefault();
//
//     const user = {
//       name: this.state.name
//     };
//
//     axios.post(`http://localhost:3001/name`, {user}).then(res => {
//       console.log(res);
//       console.log(res.data);
//     });
//     alert(user.name + 'submitted');
//   }
//
//   render() {
//     return (<div>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Person Name:
//           <input type="text" name="name" onChange={this.handleChange}/>
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>)
//   }
// }
