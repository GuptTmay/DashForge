import { Card, CardDescription, CardTitle } from './ui/card'
import type { LucideProps } from 'lucide-react'

interface MiniInfoCardProps {
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  imageSrc?: string;
  className?: string;
  desc: string;
  title: string;
}

const MiniInfoCard = ({ icon: Icon, className, imageSrc, desc, title }: MiniInfoCardProps) => {
  return (
    <Card className={`flex flex-1 flex-row sm:w-[12rem] items-center gap-4 p-3 ${className ?? ''}`}>
      <div className='w-12 h-12 flex items-center justify-center rounded-full bg-muted'>
        {Icon ? <Icon strokeWidth='2px' className='w-8 h-8' /> : imageSrc ? <img src={imageSrc} className='w-full h-full' alt='icon' /> : null}
      </div>
      <div className='flex flex-col'>
        <CardDescription className='text-xs'>{desc}</CardDescription>
        <CardTitle className='text-lg'>{title}</CardTitle>
      </div>
    </Card>
  )
}

export default MiniInfoCard
