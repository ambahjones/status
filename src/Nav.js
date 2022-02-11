import './App.css';
import Content from './Content.js';
import { useState } from 'react';

export default function Nav() {
    const [page, setPage] = useState('status');

    let result;

    function updateResult(str) {
        setPage(result);
    }

    function navClick(event) {
        let btnId = event.target.id;
        let navBtns = document.querySelectorAll('.navBtn');
        navBtns.forEach(btn => {
            btn.classList.add('text-gray-400');
        } );

        event.target.classList.remove('text-gray-400');

        result = btnId;
        updateResult(result);
    }

    return (
        <div className='wrapper md:w-full'>
            <nav className='flex flex-wrap md:mx-auto md:flex-nowrap md:justify-evenly'>
                <a href='https://www.getshifter.io/'><img src='https://status.getshifter.io/static/img/4de5b7e.svg' alt='logo' className='h-10 mx-3 mb-2'></img></a>
                <div className='flex w-full justify-evenly md:w-2/3 md:justify-start'>
                    <p className='navBtn text-md p-2 md:text-xl md:py-4 hover:cursor-pointer' id='status' onClick={navClick}>System Status</p>
                    <p className='navBtn text-md p-2 md:py-4 md:text-xl hover:cursor-pointer text-gray-400' id='history' onClick={navClick}>Status History</p>
                    <p className='navBtn text-md p-2 md:py-4 md:text-xl hover:cursor-pointer text-gray-400' id='updates' onClick={navClick}>Updates</p>
                </div>
            </nav>

            <Content page={page} />

        </div>
    );
}