import './App.css';
//info filled in with Feb changelog data 

export default function Updates() {
    return (
        <section className='pb-6'>
            <h1 className='text-center text-3xl'>Updates and Changes</h1>
            <h2 className='mt-8 mb-1 text-lg font-bold'>February 2022</h2>
            <article>
                <h3 className='font-bold'>Dashboard</h3>
                <p className='my-5'>The dashboard has been given a major performance boost through the removal of a repetitive API call that was causing the occasional appearance of a blank page during navigation.</p>
                <p className='my-5'>The pre-selected country that was showing in the dropdown menu of the team creation page was removed. This will allow for more accurate representation of teammate’s locations.</p>
            </article>

            <article>
                <h3 className='font-bold'>Documentation</h3>
                <p className='my-5'>Documentation also received a makeover through the removal of images depicting a previous version of the dashboard and updated images to reflect the current look, improving efficiency and readability for users.</p>
            </article>
        </section>
    );
}