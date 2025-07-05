'use client';

import {
  LineChart,
  Line,
  XAxis,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart.jsx';

const chartData = [
  { month: 'SEP', spent: 1900, budget: 1000 },
  { month: 'OCT', spent: 3100, budget: 2200 },
  { month: 'NOV', spent: 2300, budget: 1500 },
  { month: 'DEC', spent: 3600, budget: 2800 },
  { month: 'JAN', spent: 4000, budget: 3100 },
  { month: 'FEB', spent: 2500, budget: 2900 },
];

const dlchartConfig = {
  spent: {
    label: 'Spent',
    color: '#7350FB',
  },
  budget: {
    label: 'Budget',
    color: '#39B6FD',
  },
} satisfies ChartConfig;

export function DashboardLineChart() {
  return (
    <ChartContainer
      config={dlchartConfig}
      className="max-h-[200px] min-h-[150px] w-full"
    >
      <LineChart
        margin={{ top: 10, right: 10, left: 20, bottom: 10 }}
        accessibilityLayer
        data={chartData}
      >
        <ChartTooltip content={<ChartTooltipContent />} />
        <XAxis
          dataKey="month"
          tickMargin={10}
          tickLine={false}
          axisLine={false}
        />
        <Line
          dataKey="spent"
          strokeWidth="3px"
          stroke={dlchartConfig.spent.color}
          type={'monotone'}
          dot={false}
        />
        <Line
          dataKey="budget"
          strokeWidth="3px"
          stroke={dlchartConfig.budget.color}
          type={'monotone'}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}

const weeklyRevenueData = [
  { day: 17, low: 20, mid: 24, high: 50 },
  { day: 18, low: 27, mid: 35, high: 40 },
  { day: 19, low: 22, mid: 20, high: 20 },
  { day: 20, low: 10, mid: 34, high: 40 },
  { day: 21, low: 18, mid: 20, high: 50 },
  { day: 22, low: 20, mid: 30, high: 50 },
  { day: 23, low: 28, mid: 25, high: 34 },
  { day: 24, low: 22, mid: 30, high: 40 },
  { day: 25, low: 20, mid: 25, high: 35 },
];

const dsbchartConfig = {
  low: {
    label: 'Low',
    color: '#543DE0',
  },
  mid: {
    label: 'Mid',
    color: '#61B7E1',
  },
  high: {
    label: 'High',
    color: '#C2CBDD',
  },
} satisfies ChartConfig;

export function DashboardStackedBarChart() {
  return (
    <ChartContainer config={dsbchartConfig} className="h-[210px] w-full">
      <BarChart
        data={weeklyRevenueData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap={'35%'}
      >
        <XAxis axisLine={false} tickLine={false} dataKey="day" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="low"
          stackId="a"
          width={'2px'}
          fill={dsbchartConfig.low.color}
        />
        <Bar dataKey="mid" stackId="a" fill={dsbchartConfig.mid.color} />
        <Bar
          dataKey="high"
          stackId="a"
          radius={[10, 10, 0, 0]}
          fill={dsbchartConfig.high.color}
        />
      </BarChart>
    </ChartContainer>
  );
}

const dailyTrafficData = [
  { hour: '00', value: 50 },
  { hour: '04', value: 30 },
  { hour: '08', value: 80 },
  { hour: '12', value: 60 },
  { hour: '14', value: 70 },
  { hour: '16', value: 90 },
  { hour: '18', value: 20 },
];

const dbchartConfig = {
  value: {
    label: 'Value',
    color: '#7551FF',
  },
} satisfies ChartConfig;

export function DashboardBarChart() {
  return (
    <ChartContainer config={dbchartConfig} className="h-[130px]">
      <BarChart
        data={dailyTrafficData}
        margin={{
          top: 0,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        barCategoryGap={'35%'}
      >
        <XAxis axisLine={false} tickLine={false} dataKey="hour" />
        <ChartTooltip content={<ChartTooltipContent />} />

        <Bar
          dataKey="value"
          radius={[10, 10, 10, 10]}
          stackId="a"
          fill={dbchartConfig.value.color}
        />
      </BarChart>
    </ChartContainer>
  );
}

const dpData = [
  { name: 'Your files', value: 63, color: '#7A5AF8' },
  { name: 'System', value: 25, color: '#3EDBF0' },
  { name: 'Other', value: 12, color: '#6EE7B7' },
];

const dpConfig = {
  value: { label: 'Value' },
} satisfies ChartConfig;

export function DashboardPieChart() {
  return (
    <ChartContainer config={dpConfig} className="h-[250px] w-[250px]">
      <PieChart
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 10,
        }}
      >
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie
          data={dpData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {dpData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
