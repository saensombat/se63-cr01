
// * หน้านี้เป็นการเขียน react แบบ Hook

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [courses, setCourses] = useState<any[]>([]); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3888/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('fetch Data failed', error);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
    {courses.map(item => (
      <div key={item.id}>
        <ul key={item.id}>
          <li><h2>{item.number} - {item.title}</h2></li>
          <br />
        </ul>
      </div>
    ))}
  </div>
  );
}


// type AppState = {
//   message: String;
// };


// class App extends React.Component<{}, AppState> {
//   state: AppState = {
//     message: 'Default message',
//   };


//   componentDidMount() {
//     axios.get('http://localhost:3888/courses')
//       .then(res => res.data)
//       .then(obj => {
//         this.setState({ message: obj.message })
//       })
//   }


//   render() {
//     return (
//       <div>
//         {this.state.message}
//       </div>
//     );
//   }
// }

export default App;
