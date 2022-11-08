
import { Button, Form, Input,Table } from 'antd';
import React from 'react';
import { useState,useEffect } from 'react';
import Pengguna from './TestHook1'


const GetDataFromLS=()=>{
  const data = localStorage.getItem('user');
  if(data){
    return JSON.parse(data);
  }else{
    return[]
  }
}

const TestHook2 = () => {
  //input
  const [user,setUser]=useState(GetDataFromLS())
 const[userName,setUserName]=useState('');
 const[email,setEmail]=useState('');

 const handleSubmit=(e)=>{
  e.preventDefault();
  let userd={
    userName,email
  }
  setUser([...user,userd]);
  setUserName('');
  setEmail('');
 }
 
 useEffect(()=>{
  localStorage.setItem('user',JSON.stringify(user));
 },[user]);
//output table

const columns=[
  {
    title:'name'
  },
  {
    title:'email'
  }
]
  return (
    <div>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}

      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(e)=>setUserName(e.target.value)} value={userName}/>
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            
            message: 'Please input your email!',
          },
        ]}
      >
        <Input onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary"onClick={handleSubmit} >
          Submit
        </Button>
        <Button  htmlType='reset' >
          Reset
        </Button>
      </Form.Item>
    </Form>
    <div>
    <Table>
       <div>
      {user.length>0&&<>
        <Pengguna user={user}/>
        </>}
       </div>
    </Table>
    </div>
    </div>
    
  );
};
export default TestHook2;