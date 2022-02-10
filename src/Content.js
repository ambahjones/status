import './App.css';
import Status from './Status.js';
import History from './History.js';
import Updates from './Updates.js';

export default function Content(props) {
    console.log(props);
    let page = props.page;
    console.log(page);
    if(page === 'history') {
        return (
        <div className='w-3/5 my-4 mx-auto'>
            <History />
        </div>
    );
    } else if(page === 'updates') {
        return (
        <div className='w-3/5 my-4 mx-auto'>
            <Updates />
        </div>
    );
    } else {
        return (
        <div className='w-3/5 my-4 mx-auto'>
            <Status />
        </div>
    );
    }
    
    /*return (
        <div className='w-3/5 mx-auto'>
            <Status />
        </div>
    );*/
}