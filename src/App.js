import React from "react";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdTabletAndroid } from "react-icons/md";
import { RiCollageFill } from "react-icons/ri";
import { FaSimCard } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { BsHospital } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { BsPersonStanding } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";


const StudentManagement = () => {
  return (
    <div className="student-management">
      <div className="row">
        <div className="col-md-2">
      <div className="student-management-header">
        <img style={{width:'100px' ,height:'100px',borderRadius:"100px"}} src="https://www.gala-global.org/sites/default/files/HINDUSTHAN_COLLEGE_OF_ENGINEERING_AND_TECHNOLOGY_2.jpg"></img>
          <div className="Icon">
          <FaUserFriends  className='navicon'/>
          <h5>Student  Management</h5>
          </div>
          <div className="Icon">
          <MdTabletAndroid  className='navicon'/>
          <h5>Financial Management</h5>
          </div>
          <div className="Icon">
          <RiDiscountPercentFill  className='navicon'/>
          <h5>Quality Control</h5>
          </div>
          <div className="Icon">
          <RiCollageFill className='navicon' />
          <h5>Report Delivery</h5>
          </div>
          <div className="Icon">
          <FaSimCard className='navicon' />
          <h5>Attendance</h5>
          </div>
          <hr></hr>
          <div className="bott">
          <FaQuestionCircle className='navicon1'/>
            <IoMdSettings className='navicon1'/>
            <ImExit className='navicon1'/>
          </div>
      </div>
      </div>
      <div className="col-md-10">
        <h4 className="Top">Student Management System</h4>
      <div className="header">
        <div className="stat regular-students">
        <FaUserAlt className="icons" />
          <h3>8</h3>
          <p>Regular Students</p>
        </div>
        <div className="stat remedial-students">
        <FaUserTie className="icons"/>
          <h3>13</h3>
          <p>Remedial Students</p>
        </div>
        <div className="stat paid-clubs">
        <BsPersonStanding className="icons"/>
          <h3>00</h3>
          <p>In Paid Clubs</p>
        </div>
      </div>
      <hr style={{border:"5px solid white"}}></hr>
      <div className="menu">
        <div className="menu-item">
        <FaUserAlt className="boticon"/>
          <h6>Regular Enrollment</h6>
        </div>
        <div className="menu-item">
        <FaBook className="boticon"/>
          <h6>Remedial Enrollment</h6>
        </div>
        <div className="menu-item">
        <IoManSharp className="boticon" />
          <h6>Club Management</h6>
        </div>
        <div className="menu-item">
        <FaBookReader className="boticon" />
          <h6>Classroom Management</h6>
        </div>
        <div className="menu-item">
        <IoMdMailUnread className="boticon"/>
          <h6>SMS / EMAIL</h6>
        </div>
        <div className="menu-item">
        <FaSimCard className="boticon"/>
          <h6>Attendance</h6>
        </div>
        <div id="move" className="menu-item">
          <BsHospital className="boticon1"/>
          <h6>Clinic</h6>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default StudentManagement;
