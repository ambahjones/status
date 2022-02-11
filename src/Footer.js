import './App.css';

export default function Footer() {
    return (
        <footer className='flex flex-wrap justify-evenly w-full h-24'>
            <div className='flex justify-evenly w-full h-2/5 md:w-2/3'>
                <a href='https://www.getshifter.io/'><span className='text-gray-400 hover:text-black'>Home</span></a>
                <a href='https://www.getshifter.io/' target='_blank' rel='noreferrer'><span className='text-gray-400 hover:text-black'>Contact</span></a>
                <a href='https://support.getshifter.io/' target='_blank' rel='noreferrer'><span className='text-gray-400 hover:text-black'>Support</span></a>
            </div>
            <div className='h-1/2'>
                <span>service by Company</span>
            </div>
        </footer>
    );
}