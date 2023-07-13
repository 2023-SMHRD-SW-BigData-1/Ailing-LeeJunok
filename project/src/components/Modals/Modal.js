
import '../../css/Modals/Modal.css'

import React from 'react'

const Modal = (props) => {

    const { open, close, header } = props;

    return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
            <div className='modalHead'>
                {header}
                <button className="close" onClick={close}>
                &times;
                </button>
            </div>
            <div className='modalMain'>{props.children}</div>
            <div className='modalFooter'>
                <button className="close" onClick={close}>
                close
                </button>
            </div>
            </section>
        ) : null}
        </div>
    )
}

export default Modal;
