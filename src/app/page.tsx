//src/app/page.tsx
import OdometerForm from '@/components/OdemeterForm'


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center font-bold md:w-3/4 lg:w-2/3 w-full mx-auto'>
      <OdometerForm />
    </div>
  )
}
