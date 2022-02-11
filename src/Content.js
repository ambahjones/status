import './App.css';
import Status from './Status.js';
import History from './History.js';
import Updates from './Updates.js';

export default function Content(props) {
    let page = props.page;
    if(page === 'history') {
        return (
        <main className='w-11/12 my-4 mx-auto md:w-5/6'>
            <History />
        </main>
    );
    } else if(page === 'updates') {
        return (
        <main className='w-11/12 my-4 mx-auto md:w-5/6'>
            <Updates />
        </main>
    );
    } else {
        return (
        <main className='w-11/12 my-4 mx-auto md:w-5/6'>
            <Status />
        </main>
    );
    }
}