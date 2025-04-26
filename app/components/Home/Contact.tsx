import { ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <div className='bg-[#0649E7] rounded-2xl w-[75%] flex flex-row justify-between h-72 my-3 mx-auto items-center text-white p-16'>
      <div className='text-4xl w-[20%]'>STILL HAVE DOUBTS?</div>
      <div className='text-6xl font-semibold'>Contact us</div>
      <div className='text-3xl rounded-full bg-white p-4'><ArrowRight color='#0649E7' /></div>
    </div>
  )
}

export default Contact;
