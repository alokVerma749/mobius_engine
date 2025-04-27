import { ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <div className='bg-[#0649E7] gap-6 rounded-2xl w-[75%] flex flex-col md:flex-row justify-between h-full md:h-72 my-3 mt-8 mx-auto items-center text-white p-16'>
      <div className='text-xl md:text-4xl md:w-[20%]'>STILL HAVE DOUBTS?</div>
      <div className='text-4xl md:text-6xl font-semibold'>Contact us</div>
      <div className='text-3xl rounded-full bg-white p-2 md:p-4'><ArrowRight color='#0649E7' /></div>
    </div>
  )
}

export default Contact;
