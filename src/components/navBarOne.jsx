import React from 'react'
import Item from './navBarItem'


const navBarOne = () => {
    return (
        <header>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div>
                    <a href="https://google.com">
                        <img className='h-8 w-auto' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div className='flex flex-row space-x-12'>

                    <Item text='Product' />
                    <Item text='Features' />
                    <Item text='Marketplace' />
                    <Item text='Company' />
                </div>
                <div >
                    <a
                        href="google"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Log in
                    </a>
                </div>
            </nav>
            <div>

            </div>
        </header>
    )
}

export default navBarOne
