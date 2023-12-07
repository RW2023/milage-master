import OdometerForm from '@/components/OdemeterForm'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center  text-4xl font-bold'>
      <OdometerForm />
    </div>
  )
}
