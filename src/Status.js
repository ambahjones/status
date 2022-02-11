import './App.css';

export default function Status() {
    return (
        <section>
            <div className='flex content-center w-full h-12 bg-green-500 rounded my-4'>
                <span className='mx-auto text-center text-xl pt-2 md:text-2xl md:pt-1 text-white'>Operational</span>
            </div>
            <article className='border-2 rounded p-3'>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded md:py-4'>
                    <p className='px-3 md:px-5'>API</p>
                    <p className='px-3 md:px-5'>Operational</p>
                </div>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded md:py-4'>
                    <p className='px-3 md:px-5'>CDN</p>
                    <p className='px-3 md:px-5'>Operational</p>
                </div>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded md:py-4'>
                    <p className='px-3 md:px-5'>DNS</p>
                    <p className='px-3 md:px-5'>Operational</p>
                </div>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded md:py-4'>
                    <p className='px-3 md:px-5'>Site delivery</p>
                    <p className='px-3 md:px-5'>Operational</p>
                </div>
            </article>
        </section>
    );
}