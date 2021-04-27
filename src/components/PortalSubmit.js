import React from 'react'
import ReactDOM from 'react-dom'
import './PortalSubmit.css'


export default function PortalSubmit(props) {

    if (!props.visible) return null

    return ReactDOM.createPortal((
        <>
            <div className='submit-window'>
                {props.children}
            </div>
        </>
    ), document.getElementById('modal-root'))
}