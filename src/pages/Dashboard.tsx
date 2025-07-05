import StarbucksImage from '../assets/StarbucksImage.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MiniInfoCard from '@/components/MiniInfoCard';
import indianFlagIcon from '../assets/indianFlagIcon.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  CalendarIcon,
  ChartNoAxesColumn,
  ChartNoAxesColumnIcon,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheckBig,
  Clock,
  Files,
  Fingerprint,
  Flame,
  GripVertical,
  LucideDollarSign,
  MoreHorizontal,
  PlayCircleIcon,
  Timer,
  Utensils,
} from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
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
  DashboardBarChart,
  DashboardLineChart,
  DashboardPieChart,
  DashboardStackedBarChart,
} from '@/components/ChartCard';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { DropdownWrapper } from '@/components/DropdownWrapper';
import { MyCalendar } from '@/components/MyCalendar';
import { ComplexTableData } from '@/lib/data';
import { returnStatus } from '@/lib/utilsFunc';

const tableData = [
  {
    id: 1,
    name: 'Sales',
    progress: '17.5%',
    quantity: '2,456',
    date: '24.Jan.2021',
    checked: false,
  },
  {
    id: 2,
    name: 'E-Commerce',
    progress: '10.8%',
    quantity: '1,485',
    date: '12.Jun.2021',
    checked: true,
  },
  {
    id: 3,
    name: 'Weekly Update',
    progress: '21.3%',
    quantity: '1,024',
    date: '5.Jan.2021',
    checked: true,
  },
  {
    id: 4,
    name: 'Venus 3D Assets',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
    checked: true,
  },
  {
    id: 5,
    name: 'Marketplace',
    progress: '12.2%',
    quantity: '258',
    date: '17.Dec.2021',
    checked: false,
  },
];

const tasksData = [
  { name: 'Landing Page Design', checked: false },
  { name: 'Dashboard Builder', checked: true },
  { name: 'Mobile App Design', checked: true },
  { name: 'Illustrations', checked: false },
  { name: 'Promotional LP', checked: true },
];


export const Dashboard = () => {
  const [tasksInfo, setTasksInfo] = useState(tasksData);

  return (
    <div className="flex w-full flex-col gap-6 px-4 py-6">
      <div className="flex flex-col flex-wrap justify-around gap-2 sm:flex-row sm:gap-6">
        <MiniInfoCard
          icon={ChartNoAxesColumnIcon}
          desc="Earning"
          title="$350.4"
        />
        <MiniInfoCard
          icon={LucideDollarSign}
          desc="Spend This Month"
          title="$682.5"
        />
        <MiniInfoCard
          imageSrc={indianFlagIcon}
          desc="Your Balance"
          title="$1000"
          className="bg-background sm:flex-row-reverse sm:justify-around border border-gray-800 shadow-md"
        />
        <MiniInfoCard icon={CircleCheckBig} desc="Your Tasks" title="154" />
        <MiniInfoCard icon={Files} desc="Your Projects" title="2951" />
      </div>

      <div className="flex w-full flex-col flex-wrap gap-6 md:flex-row">
        <Card className="flex-1">
          <CardHeader className="flex justify-between">
            <Button variant="outline">
              <CalendarIcon /> This Month
            </Button>
            <Button variant="outline" size="icon">
              <DropdownWrapper>
                <ChartNoAxesColumn />
              </DropdownWrapper>
            </Button>
          </CardHeader>
          <div className="flex flex-col sm:flex-row">
            <CardContent className="flex flex-col">
              <CardTitle className="text-3xl leading-[100%]">$37.5K</CardTitle>
              <CardDescription className="mt-2 flex items-center text-xs">
                Total Spend
                <ChevronUp
                  strokeWidth="5px"
                  className="mx-2 h-2 w-2 text-green-400"
                />
                <span className="text-green-400">+2.45%</span>
              </CardDescription>
              <CardDescription className="mt-5 flex items-center text-sm text-green-400">
                <CheckCircle2 className="mr-2 h-5 w-5" /> On Track{' '}
              </CardDescription>
            </CardContent>
            <CardContent className="mt-10 flex-1 pl-0 sm:mt-0">
              <DashboardLineChart />
            </CardContent>
          </div>
        </Card>

        {/* Weekly Revenue */}
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-xl sm:text-2xl">
              Weekly Revenue
            </CardTitle>
            <Button variant="outline" size="icon">
              <DropdownWrapper>
                <ChartNoAxesColumn />
              </DropdownWrapper>
            </Button>
          </CardHeader>
          <CardContent>
            <DashboardStackedBarChart />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Check Table */}
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-xl sm:text-2xl">Check Table</CardTitle>
            <Button variant="outline" size="icon">
              <DropdownWrapper>
                <MoreHorizontal />
              </DropdownWrapper>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex w-42 items-center gap-3 font-medium">
                      <Checkbox id={row.id.toString()} checked={row.checked} />
                      <Label htmlFor={row.id.toString()}>{row.name}</Label>
                    </TableCell>
                    <TableCell>{row.progress}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell className="text-right">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex flex-1 flex-col gap-6 sm:flex-row">
          {/* Daily Traffic Card */}
          <Card className="flex flex-1/2 flex-col justify-between">
            <CardHeader className="flex">
              <div className="flex w-full flex-col gap-2">
                <div className="flex w-full items-center justify-between">
                  <CardDescription>Daily Traffic</CardDescription>
                  <CardDescription className="mt-2 flex items-center text-sm">
                    <ChevronUp
                      strokeWidth="5px"
                      className="mx-2 h-2 w-2 text-green-400"
                    />
                    <span className="text-green-400">+2.45%</span>
                  </CardDescription>
                </div>
                <div className="flex items-end gap-2">
                  <CardTitle className="text-3xl leading-[100%]">
                    2,569
                  </CardTitle>
                  <CardDescription>Visitors</CardDescription>
                </div>
              </div>
            </CardHeader>
            <DashboardBarChart />
          </Card>

          {/* Your Pie Chart  */}
          <Card className="flex flex-1/2 flex-col items-center justify-between">
            <CardHeader className="flex w-full items-center justify-between">
              <CardTitle className="text-xl leading-[100%]">
                Your Pie Chart
              </CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-sm"
                  >
                    <CardDescription>Monthly</CardDescription>
                    <ChevronDown className="text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-30">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem disabled>
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <DashboardPieChart />
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Complex Table  */}
        <Card className="flex flex-1 flex-col gap-4">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-xl sm:text-2xl">Complex Table</CardTitle>
            <Button variant="outline" size="icon">
              <DropdownWrapper>
                <MoreHorizontal />
              </DropdownWrapper>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-left">Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ComplexTableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-start gap-3 font-medium">
                      {row.name}
                    </TableCell>
                    <TableCell>{returnStatus(row.status)}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell className="text-right">
                      <Progress value={row.progress} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex flex-1 flex-col gap-6 sm:flex-row">
          {/* Task */}
          <Card className="flex-1">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Checkbox id="task-section" checked />
                <Label htmlFor="task-section" className="text-lg font-semibold">
                  Task
                </Label>
              </CardTitle>
              <Button variant="outline" size="icon">
                <DropdownWrapper>
                  <MoreHorizontal />
                </DropdownWrapper>
              </Button>
            </CardHeader>

            <CardContent className="flex flex-col gap-1">
              {tasksInfo.map((task, index) => {
                const checkboxId = `task-${index}`;
                return (
                  <div
                    key={checkboxId}
                    className="flex w-full items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Checkbox
                        id={checkboxId}
                        onClick={() =>
                          setTasksInfo((prev) =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, checked: !task.checked }
                                : item
                            )
                          )
                        }
                        checked={task.checked}
                      />
                      <Label
                        htmlFor={checkboxId}
                        className="ml-2 text-sm font-normal"
                      >
                        {task.name}
                      </Label>
                    </div>
                    <Button variant={'ghost'}>
                      <GripVertical className="text-muted-foreground" />
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Calendar */}
          <MyCalendar />
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        <Card className="flex-1 pb-0">
          <CardHeader className="flex flex-1 gap-4">
            <Button
              variant="outline"
              disabled
              size="icon"
              className="h-12 w-12"
            >
              <Flame
                strokeWidth="2px"
                className="text-white opacity-100"
              ></Flame>
            </Button>
            <div className="flex h-full flex-col items-start justify-between">
              <CardDescription className="">Business Design</CardDescription>
              <CardTitle className="text-2xl">
                New Lessons is avaiable
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle>
              <h2 className="text-3xl">
                What do you need to know to create better products?
              </h2>
            </CardTitle>
          </CardContent>

          <div className="flex w-full flex-col items-center justify-between rounded-b-xl bg-slate-400/30">
            <div className="flex w-full gap-6 px-6 py-4">
              <div className="flex items-center gap-2">
                <Timer className="text-green-400"></Timer>
                <p>85 Mins</p>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircleIcon className="text-red-400" />
                <p>Video Format</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-between p-6">
              <div className="*:data-[slot=avatar]:ring-background/50 flex -space-x-2 *:data-[slot=avatar]:ring-1">
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src={`https://i.pravatar.cc/150?img=1`}
                  />
                  <AvatarFallback>Avatar1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src={`https://i.pravatar.cc/150?img=2`}
                  />
                  <AvatarFallback>Avatar2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src={`https://i.pravatar.cc/150?img=3`}
                  />
                  <AvatarFallback>Avatar3</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="avatar"
                    src={`https://i.pravatar.cc/150?img=4`}
                  />
                  <AvatarFallback>Avatar4</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage alt="avatar" />
                  <AvatarFallback className="text-sm font-semibold">
                    15+
                  </AvatarFallback>
                </Avatar>
              </div>
              <Button>Get started</Button>
            </div>
          </div>
        </Card>

        <div className="flex flex-1 gap-6">
          <Card className="flex-1">
            <CardContent className="flex h-full flex-col items-start">
              <Fingerprint strokeWidth="1.5px" className="h-[5rem] w-[5rem]" />
              <CardTitle className="mt-6 text-xl tracking-tight">
                Control card security in-app with a tap
              </CardTitle>
              <CardDescription className="mt-2 text-xs">
                Discover our cards benifits, with one tap
              </CardDescription>
              <Button className="mt-auto w-full">Card</Button>
            </CardContent>
          </Card>

          <Card className="flex flex-1 flex-col">
            <CardHeader className="relative p-2">
              <img
                src={StarbucksImage}
                alt="Starbucks"
                className="h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute top-4 right-4">
                <Button variant="outline" size="icon">
                  <Clock />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="relative rounded-b-2xl p-4">
              <div className="absolute -top-16 left-6">
                <img
                  src="https://creative.starbucks.com/images/logos/logo-1987.png"
                  alt="logo"
                  className="h-14 w-14 rounded-full border"
                />
              </div>

              <CardTitle className="mt-6 text-2xl font-semibold">
                Starbucks
              </CardTitle>
              <CardDescription className="text-md flex items-center gap-2">
                <Utensils />
                <span>10% cashback & off</span>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
