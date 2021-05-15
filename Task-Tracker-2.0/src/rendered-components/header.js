import React from 'react'
import Button from './Button'


const header = ({ onAdd , showAdd}) => {
  
  
  return (
         <header className = 'header'>
           <h1>Task Tracker</h1>
           <Button color = {showAdd ?'#14a76c' :'#ac3b61' }
            text = {showAdd ?'Close' :'Add' } 
            onClick= {onAdd}/>
           
        </header>
       )
    
}




export default header
