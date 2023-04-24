import React, { useState } from "react";
import s from "./form.module.scss";
import { Input } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import axios from 'axios'
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate()

  function registration() {
    console.log(user)
  }
  
  // const createUser = async () =>{
  //   const res = await axios.get('http://localhost:3001/user')
  //   console.log(res.data)
  // }
  const createUser = async () => {
    try {
      axios.post('http://localhost:3001/user', { ...user, id: Date.now() })
        .then((res) => {
          localStorage.setItem('token', res.data.id)
          // if (res.data.id) {
          //   navigate('/')
          // }
          {
            res.data.id && res.data.password !==''?navigate('/'):
            navigate('/registration')
          }
        }

        )
    } catch (e) {

    }



  }


  return (
    <div className={s.container}>
      <Input
        size="large"
        placeholder="large size"
        prefix={<UsergroupAddOutlined />}
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        className={s.form_input}
      />

      <Input.Password
        placeholder="input password"
        visibilityToggle={{
          visible: user.password,
          onVisibleChange: setUser.password,

        }}
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <NavLink to=''>
        <Button onClick={()=> createUser() && registration()} style={{ marginTop: '20px' }} type="primary" danger ghost> Add user</Button>
      </NavLink>
    </div>
  );
};

export default Form;
