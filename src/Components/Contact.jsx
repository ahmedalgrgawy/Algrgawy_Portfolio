import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='my-8 w-full h-screen flex justify-center items-center p-4'>

            <form method='POST' action='https://getform.io/f/6a373779-46e2-456e-9649-c7e1cf4748b7' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='title'>Contact</p>
                    <p className='py-4'>Get in touch with me</p>
                </div>
                <input className='bg-[#eee] p-2 outline-none border-2 focus:border-secondary text-primary font-bold' placeholder='Name' name='name' type='text'></input>
                <input className='my-4 p-2 bg-[#eee] outline-none border-2 focus:border-secondary text-primary font-bold' placeholder='Email' name='email' type='email'></input>
                <textarea className='bg-[#eee] p-2 outline-none border-2 focus:border-secondary text-primary font-bold' name='message' rows='10' placeholder='Message'></textarea>
                <button type='submit' className='font-bold text-white border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center duration-500'>Let's Contact</button>
            </form>

        </div>
    )
}

export default Contact