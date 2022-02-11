import './App.css';
//add ability to click on an issue card and oopen a new component to deatil any issues listed?
//if issues add a class (clickable?) to the article allowing the reload, otherwise no reload
//if isClickable
export default function History() {
    return (
        <section className='pb-6'>
            <h1 className='text-3xl text-center'>Status History</h1>
            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/11</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/10</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/9</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/8</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/7</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/6</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/5</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/4</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/3</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/2</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='mt-4 mb-1 rounded shadow-md p-2'>
                <h2>2/1</h2>
                <p className='text-gray-400'>No reported issues</p>
            </article>

            <article className='my-6 text-gray-600 hover:text-black'><a href='/'>Complete history</a></article>
        </section>
    );
}