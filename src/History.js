import './App.css';

export default function History() {
    return (
        <section>
            <div>
                <p className='h-10 mx-auto text-center pt-2 text-white bg-green-500 rounded'>Operational</p>
            </div>
            <article className='border-2 rounded'>
                <p>API</p>
                <p>CDN</p>
                <p>DNS</p>
                <p>Site delivery</p>
            </article>
        </section>
    );
}