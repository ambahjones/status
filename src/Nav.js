import './App.css';
//import Status from './Status.js';
//import History from './History.js';
//import Updates from './Updates.js';
import Content from './Content.js';
//value of linked clicked needs to be returned from function to change content on page

export default function Nav() {
    let result;

    function navClick(event) {
        let btnId = event.target.id;
        let navBtns = document.querySelectorAll('.navBtn');
        navBtns.forEach(btn => {
            btn.classList.add('text-gray-400');
        } );

        event.target.classList.remove('text-gray-400');

        result = btnId;
        console.log(result);
        return result;
    }
    console.log(result); //need to get result to actually return a value that is usable to 
    //function handleClick(){}

    return (
        <div className='wrapper'>
            <nav className='flex md:justify-between'>
                <img src='https://status.getshifter.io/static/img/4de5b7e.svg' alt='logo' className='h-10'></img>
                <div className='flex w-4/5 justify-start'>
                    <p className='navBtn p-4 md:text-xl hover:cursor-pointer' id='status' onClick={navClick}>System Status</p>
                    <p className='navBtn p-4 md:text-xl hover:cursor-pointer text-gray-400' id='history' onClick={navClick}>Status History</p>
                    <p className='navBtn p-4 md:text-xl hover:cursor-pointer text-gray-400' id='updates' onClick={navClick}>Updates</p>
                </div>
            </nav>

            <Content page={result} />

        </div>
    );
}