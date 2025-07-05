import { Pencil } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { KanbanStatus } from '@/lib/utilsFunc';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface KanbanCardProps {
  title: string;
  image?: string;
  desc: string;
  status: keyof typeof KanbanStatus;
}

const KanbanCard = (props: KanbanCardProps) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{props.title}</CardTitle>
        <Button variant="outline" size="icon">
          <Pencil />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {props.image && (
          <div>
            <img
              src={props.image}
              className="h-full w-full rounded-2xl"
              alt="Card Image"
            />
          </div>
        )}
        <CardDescription className="">{props.desc}</CardDescription>
        <div className="flex w-full justify-between">
          <div className="*:data-[slot=avatar]:ring-background/50 flex items-center -space-x-3 *:data-[slot=avatar]:ring-1">
            <Avatar className="size-7">
              <AvatarImage
                alt="avatar"
                src={`https://i.pravatar.cc/150?img=1`}
              />
              <AvatarFallback>Avatar1</AvatarFallback>
            </Avatar>
            <Avatar className="size-7">
              <AvatarImage
                alt="avatar"
                src={`https://i.pravatar.cc/150?img=2`}
              />
              <AvatarFallback>Avatar2</AvatarFallback>
            </Avatar>
            <Avatar className="size-7">
              <AvatarImage
                alt="avatar"
                src={`https://i.pravatar.cc/150?img=3`}
              />
              <AvatarFallback>Avatar3</AvatarFallback>
            </Avatar>
          </div>
          {KanbanStatus[props.status] == 'Update' && (
            <Button className="bg-cyan-500 font-bold text-white hover:bg-cyan-500/80">
              {KanbanStatus[props.status]}
            </Button>
          )}
          {KanbanStatus[props.status] == 'Done' && (
            <Button className="bg-green-500 text-white hover:bg-green-500/80">
              {KanbanStatus[props.status]}
            </Button>
          )}
          {KanbanStatus[props.status] == 'Pending' && (
            <Button className="bg-yellow-500 text-white hover:bg-yellow-500/80">
              {KanbanStatus[props.status]}
            </Button>
          )}
          {KanbanStatus[props.status] == 'Error' && (
            <Button className="bg-red-500 text-white hover:bg-red-500/80">
              {KanbanStatus[props.status]}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default KanbanCard;
