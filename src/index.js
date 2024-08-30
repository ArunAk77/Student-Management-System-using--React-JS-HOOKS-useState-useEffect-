import React from "react";
import ReactDOM from 'react-dom';
import StudentManagement from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



function Final() {
  return (
    <div className="App">
       <StudentManagement/>
    </div>
  );
}
ReactDOM.render(<Final/>,document.getElementById('root'));


