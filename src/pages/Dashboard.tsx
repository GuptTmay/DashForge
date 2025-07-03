import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MiniInfoCard from '@/components/MiniInfoCard';
import indianFlagIcon from '../assets/indianFlagIcon.png';
import {
  AlertCircle,
  CalendarIcon,
  ChartNoAxesColumn,
  ChartNoAxesColumnIcon,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheckBig,
  Files,
  Flame,
  GripVertical,
  LucideDollarSign,
  MoreHorizontal,
  Timer,
  XCircle,
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

const Status = {
  APPROVED: 'Approved',
  DISABLE: 'Disable',
  ERROR: 'Error',
} as const;
type Status = (typeof Status)[keyof typeof Status];

const complexTableData = [
  {
    name: 'Sales PRO',
    status: Status.APPROVED,
    date: '18 Apr 2022',
    progress: 80,
  },
  {
    name: 'Inventory Free',
    status: Status.DISABLE,
    date: '18 Apr 2022',
    progress: 40,
  },
  {
    name: 'Marketplace',
    status: Status.ERROR,
    date: '20 May 2021',
    progress: 90,
  },
  {
    name: 'Weekly Updates',
    status: Status.APPROVED,
    statusColor: 'green',
    date: '12 Jul 2021',
    progress: 60,
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
        <Card className="bg-background flex flex-row items-center gap-3 border border-gray-800 px-4 py-3 shadow-md sm:w-[12rem]">
          <div className="flex flex-col">
            <CardDescription className="text-muted-foreground text-xs">
              Sales
            </CardDescription>
            <CardTitle className="text-lg">$574.34</CardTitle>
            <CardDescription className="text-muted-foreground text-[10px]">
              <span className="font-bold text-green-500">+23%</span> since last
              month
            </CardDescription>
          </div>
        </Card>
        <MiniInfoCard
          imageSrc={indianFlagIcon}
          desc="Your Balance"
          title="$1000"
          className="flex-row-reverse justify-around"
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
                {complexTableData.map((row, index) => (
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
          <CardHeader className="flex flex-1 gap-2">
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
              <h2 className='text-3xl'>What do you need to know to create better products?</h2>
            </CardTitle>
          </CardContent>
          <div className='w-full h-10 rounded-b-xl bg-slate-400/30'>
              <div className='flex px-12 py-4 gap-6'>
                <div>
                   <Timer className='text-green-400'></Timer> 
                </div>
              </div>
          </div>
        </Card>

        <div className="flex flex-1 gap-6">
          <Card className="flex-1">
            <CardHeader className="flex flex-1 gap-2">
              <Button variant="outline" disabled size="icon">
                <Flame></Flame>
              </Button>
            </CardHeader>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-1 gap-2">
              <Button variant="outline" disabled size="icon">
                <Flame></Flame>
              </Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

function returnStatus(stat: Status) {
  switch (stat) {
    case Status.APPROVED:
      return (
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" />
          <p>{Status.APPROVED}</p>
        </div>
      );
    case Status.DISABLE:
      return (
        <div className="flex items-center gap-2">
          <AlertCircle className="text-yellow-500" />
          <p>{Status.DISABLE}</p>
        </div>
      );
    case Status.ERROR:
      return (
        <div className="flex items-center gap-2">
          <XCircle className="text-red-500" />
          <p>{Status.ERROR}</p>
        </div>
      );
    default:
      return null;
  }
}
