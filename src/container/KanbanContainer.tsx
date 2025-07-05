import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KanbanContainerProps {
  title: string;
  children: React.ReactNode;
}

const KanbanContainer = ({ title, children }: KanbanContainerProps) => {
  return (
    <Card className='flex-1/3'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='font-medium text-xl'>{title}</CardTitle>
        <Button variant='secondary' className='px-8'>+</Button>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>{children}</CardContent>
    </Card>
  );
};

export default KanbanContainer;
