/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import { MdDone } from "react-icons/md"; 
import { MdDeleteForever } from "react-icons/md";
import './Task.css'


const Task = ({task,onComplete,onDelete}) => {
  return (
    <div className='task-list'>
      <div className='task'>
        <p className={task.isCompleted?"textcompleted":"task-text"} >{task.Name}</p>
        <div className='options'>
          <button className='complete-button' onClick={()=>
            onComplete(task.id)
          }><p>Complete</p> <MdDone size={20}/></button>
          <button className='delete-button'onClick={()=>
            onDelete(task.id)
          } ><p>Delete</p><MdDeleteForever size={20}/></button>
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Task