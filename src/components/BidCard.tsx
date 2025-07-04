import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface BidCardProps {
    image: string;
    title: string;
    author: string;
    reads: number;
    price: number;  
}


const BidCard = (props: BidCardProps) => {
  return (
    <Card className="flex flex-1 flex-col py-3 rounded-2xl">
      <CardHeader className="px-3">
        <img
          src={props.image}
          alt="bid image"
          className="h-full w-full rounded-xl object-cover"
        />
      </CardHeader>

      <CardContent className="flex flex-col px-3 gap-4">
        <div className='flex w-full justify-between'>
          <div className='flex flex-col gap-1'>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription className='text-xs'>{props.author}</CardDescription>
           </div>  
           <div className="*:data-[slot=avatar]:ring-background/50 flex -space-x-4 *:data-[slot=avatar]:ring-1">
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src={`https://i.pravatar.cc/150?img=${1 * props.reads}`}
                  />
                  <AvatarFallback>Avatar1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src={`https://i.pravatar.cc/150?img=${2 * props.reads}`}
                  />
                  <AvatarFallback>Avatar2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage alt="avatar" />
                  <AvatarFallback className="text-sm font-semibold">
                    {props.reads}+
                  </AvatarFallback>
                </Avatar>
            </div> 
        </div>

            <div className='flex items-center justify-between'>
                <p className='text-xs'>Current Bid: {props.price} ETH</p>
                <Button size='sm' className='rounded-full'>Place Bid</Button>
            </div>
      </CardContent>
    </Card>
  );
};

export default BidCard;
