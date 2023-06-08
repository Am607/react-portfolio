import React from 'react'

const navBarItem = (props) => {
    return (
        <div  >
            <button type='button' className='text-gray-700 text-base font-medium hover:bg-gray-50 py-2 px-2'>
                <span>{props.text}</span>
            </button>
        </div>
    )
}

export default navBarItem