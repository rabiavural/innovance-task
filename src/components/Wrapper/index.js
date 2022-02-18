import React from 'react'
import Header from '../Header'

import './index.scss'

const Wrapper = (props) => {

    return (
        <>
            <Header />
            <div className='wrapper'>{props.children}</div>
        </>
    )
}
export default Wrapper;