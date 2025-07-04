import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import marketNftHeroImage from '@/assets/marketNftHeroImage.jpg';
import { Badge } from '@/components/ui/badge';
import BidCard from '@/components/BidCard';
import {
  BidImage1,
  BidImage2,
  BidImage3,
  BidImage4,
  BidImage5,
  BidImage6,
} from '@/assets';
import { HistoryData, TopCreatorData } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import HistoryCard from '@/components/HistoryCard';

export const Marketplace = () => {
  return (
    <div className="flex h-full flex-col-reverse gap-3 sm:flex-row">
      <div className="flex-2/3">
        <Card className="flex flex-1 flex-col-reverse sm:flex-row">
          <CardContent className="flex flex-1/2 flex-col">
            <CardTitle className="text-2xl">
              Discover, collect and sell extraordinary NFTs
            </CardTitle>
            <CardDescription className="mt-1">
              Enter in this creative world. Discover now the latest NFTs or
              start creating your own!
            </CardDescription>
            <div className="mt-10 flex items-center justify-between sm:mt-auto">
              <Button className="">Discover Now</Button>
              <Button variant="ghost">Watch Video</Button>
            </div>
          </CardContent>

          <CardContent className="flex-1/2">
            <img
              src={marketNftHeroImage}
              alt="nft Image"
              className="rounded-2xl"
            />
          </CardContent>
        </Card>

        <div className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <h2 className="text-2xl">Trending NFTs</h2>
              <div className="flex gap-2">
                <Badge variant="outline">Art</Badge>
                <Badge variant="secondary">Music</Badge>
                <Badge variant="secondary">Collectibles</Badge>
                <Badge variant="secondary">Sports</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
              <BidCard
                image={BidImage1}
                title="Abstract Colors"
                author="By Esthera Jackson"
                reads={15}
                price={0.81}
              />
              <BidCard
                image={BidImage2}
                title="ETH AI Brain"
                author="By Nick Wilson"
                reads={11}
                price={0.93}
              />
              <BidCard
                image={BidImage3}
                title="Mesh Gradients"
                author="By Will Smith"
                reads={8}
                price={0.56}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-start text-2xl">Recently Added</h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
              <BidCard
                image={BidImage4}
                title="Swipe Circles"
                author="By Peter Will"
                reads={18}
                price={2.3}
              />
              <BidCard
                image={BidImage5}
                title="Colorful Heaven"
                author="By James Nodtom"
                reads={17}
                price={1.3}
              />
              <BidCard
                image={BidImage6}
                title="3D Cubes Art"
                author="By Manny Gates"
                reads={13}
                price={6.58}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1/3 flex-col gap-4">
        <Card className="gap-0 pt-0">
          <CardHeader className="bg-accent flex items-center justify-between rounded-t-xl p-4">
            <CardTitle>Top Creators</CardTitle>
            <Button className="rounded-full" >See All</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">Name</TableHead>
                  <TableHead>Artworks</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {TopCreatorData.map((creator, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex w-[180px] items-center gap-2 font-medium">
                      <img
                        src={`https://i.pravatar.cc/150?img=${index}`}
                        className="h-8 rounded-xl"
                        alt="profile Image"
                      />
                      {creator.name}
                    </TableCell>
                    <TableCell>{creator.artworks}</TableCell>
                    <TableCell>
                      <Progress value={creator.rating} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="gap-0 pt-0">
          <CardHeader className="bg-accent flex items-center justify-between rounded-t-xl p-4">
            <CardTitle>History</CardTitle>
            <Button className="rounded-full">See All</Button>
          </CardHeader>
          <ul className='flex flex-col gap-2 p-2'>
              {HistoryData.map((history, index) => (
                <HistoryCard key={index} image={history.image} title={history.title} author={history.artist} price={history.price} time={history.timeAgo} />
              ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};
