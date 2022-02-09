import './App.css';

export default function Nav() {
    return (
        <div className='flex justify-between'>
            <img src='https://status.getshifter.io/static/img/4de5b7e.svg' alt='logo' className='h-10'></img>
            <div className='flex w-4/5 justify-start'>
                <p className='p-5'>System Status</p>
                <p className='p-5'>Known Issues</p>
                <p className='p-5'>Updates</p>
            </div>
        </div>
    );
}