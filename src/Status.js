import './App.css';

export default function Status() {
    return (
        <section>
            <div className='my-4'>
                <p className='h-12 mx-auto text-center text-xl pt-2 text-white bg-green-500 rounded'>Operational</p>
            </div>
            <article className='border-2 rounded p-3'>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded'>
                    <p className='px-3'>API</p>
                    <p className='px-3'>Operational</p>
                </div>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded'>
                    <p className='px-3'>CDN</p>
                    <p className='px-3'>Operational</p>
                </div>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded'>
                    <p className='px-3'>DNS</p>
                    <p className='px-3'>Operational</p>
                </div>
                <div className='flex justify-between mb-3 py-2 bg-green-200 rounded'>
                    <p className='px-3'>Site delivery</p>
                    <p className='px-3'>Operational</p>
                </div>
            </article>
        </section>
    );
}