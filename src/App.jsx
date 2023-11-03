import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Chip , Avatar } from '@mui/material';
import './App.css'
import Goaltable from './component/goaltable/table';
import Input from './component/input/input';
import { useState } from 'react';

function createData(id ,goal , date ,completed) {
  return {id,goal ,date ,completed };
}

const damy_data = [
  createData("1",'Frozen yoghurt', 159, 6.0),
  createData('2','Ice cream sandwich', 237, 9.0),
  createData('3','Cupcake', 305, 3.7),
  createData('4','Gingerbread', 356, 16.0),
];
const App = ()=>{
 const [data , setdata]=useState(damy_data);


 const submit =(value)=>{
  setdata(prevState => 
    {  return [ 
      ...prevState,
      {id: crypto.randomUUID(), goal:value , date:new date().toUTCString() , completed:false}
    ]}
      );
      
};


  return (
    
    <div className='w-full h-full'>
       <div className='w-2/3 mx-auto my-3'>
         
            <h1 className=' flex items-center text-2xl text-blue-600 font-bold p-3'>
              <span className='mr-2'>to do list app</span>
              <Chip
              size='small'
              color='primary'
               avatar={<Avatar src='https://th.bing.com/th/id/OIP.8crMZH-4uR1-cBNC3g5cfAHaHw?pid=ImgDet&rs=1'/>}
                label="home work" />
            </h1>
            <div className='py-3'>
          <Input subfc={submit }  />
          </div>
            <Goaltable data={data} />


       </div>


    </div>
    
    
  )
 
 
}

export default App
