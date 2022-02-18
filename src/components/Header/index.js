import React from 'react';
import { UserOutlined, LoginOutlined, HomeOutlined, FormOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './index.scss'

const Header = () => {

  const userInfoDetail = useSelector((state) => state.userReducer.userInfo);

  return (
    <div className="navbar">
      <div>
        <Link to={`/main`} className="nav-item">
          <HomeOutlined style={{ marginRigth: 5 }} />
          Main
        </Link>
        <Link to={`/form`} className="nav-item">
          <FormOutlined />
          Form
        </Link>
        <Link to={`/list`} className="nav-item">
          <UnorderedListOutlined />
          List
        </Link>

      </div>
      <div className='user-info'>
        <Link to={`/user`} >
          <UserOutlined />
          {userInfoDetail &&
            <>
              <span>{userInfoDetail?.name}</span> <span>{userInfoDetail?.surname}</span>
            </>}
        </Link>
        <Link to={`/`} className="nav-item">
          <LoginOutlined />
        </Link>
      </div>

    </div>
  )
}

export default Header;