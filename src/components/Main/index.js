import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper'
import { List } from 'antd';
import axios from 'axios'
import {IMAGE_URL} from '../../constant'


import './index.scss'


const Main = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(IMAGE_URL).then(res=> setData(res.data))
    }, [])

    return (
        <Wrapper>
            {data &&  <List
                grid={{
                    gutter: 4,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource={data}
                renderItem={item => (
                    <>
                        <List.Item >
                                 <div className="card">
                                    <img
                                        className="img"
                                        src={item.url}
                                    />
                                </div> 
                            <span className="subtext">{item.title}</span>

                        </List.Item>
                    </>
                )}
            />}
           
        </Wrapper>
    )
}
export default Main;