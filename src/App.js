import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';


export default function App() {
  return (
    <div className='flex flex-wrap justify-center content-between min-h-screen mt-4 mx-auto md:w-3/4 lg:w-3/5'>
      <Nav />
      <Footer />
    </div>
  );
}