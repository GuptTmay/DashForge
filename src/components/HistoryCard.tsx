import { Card, CardDescription, CardTitle } from './ui/card';

interface HistoryCardProps {
  image: string;
  title: string;
  author: string;
  time: string;
  price: number;
}

const HistoryCard = (props: HistoryCardProps) => {
  return (
    <Card className="flex flex-row gap-0 flex-1 border-0 hover:bg-muted rounded-2xl p-3">

      <div className="flex flex-2/4 items-center gap-2">
        <img className='w-12 h-12 rounded-2xl' src={props.image} alt="History Image" />
        <div className="flex flex-col">
          <CardTitle className='text-sm'>{props.title}</CardTitle>
          <CardDescription className='text-xs'>{props.author}</CardDescription>
        </div>
      </div>
      <div className="flex-1/4 gap-1 flex justify-center items-center">
        <EthLogo className="h-4 w-4" />
        <h3 className='text-sm flex justify-center items-center'>{props.price} ETH</h3>
      </div>
      <div className="flex-1/4 flex justify-center items-center">{props.time}</div>
    </Card>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EthLogo = (props: any) => {
  return (
    <svg {...props} fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
      <path d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z"></path>
    </svg>
  );
};

export default HistoryCard;
