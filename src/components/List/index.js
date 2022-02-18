import React, { useEffect } from 'react'
import { Table} from 'antd';
import Wrapper from '../Wrapper';
import * as userActions from '../../redux/actions/userActions'
import { useDispatch, useSelector } from "react-redux";


const { Column } = Table;

const ListPage = () => {
    const dispatch = useDispatch();

    const userListData = useSelector((state) => state.userReducer.userList);

    useEffect(() => {
        dispatch(userActions.getUserList());
    }, [])
    return (

        <Wrapper>
            <Table dataSource={userListData}>
                <Column title="Name" dataIndex="name" key="firstName" />
                <Column title="Username" dataIndex="username" key="lastName" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="City" dataIndex={['address', 'city']} key="address" />
                <Column title="Phone" dataIndex="phone" key="phone" />

            </Table>
        </Wrapper>
    )
}

export default ListPage