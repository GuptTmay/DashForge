import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { AppleIcon, AndroidIcon, WindowsIcon } from '../../assets/SvgIcons.tsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DevTableData } from '@/lib/data.ts';

const renderPlatformIcons = (platforms: string[]) => (
  <div className="flex gap-1">
    {platforms.includes('apple') && <AppleIcon className="h-4 w-4" />}
    {platforms.includes('android') && <AndroidIcon className="h-4 w-4" />}
    {platforms.includes('windows') && <WindowsIcon className="h-4 w-4" />}
  </div>
);

// 👇 Define columns
const columns: ColumnDef<(typeof DevTableData)[0]>[] = [
  {
    accessorKey: 'title',
    header: () => 'Title',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'platforms',
    header: () => 'Platform',
    cell: (info) => renderPlatformIcons(info.getValue() as string[]),
  },
  {
    accessorKey: 'date',
    header: () => 'Date',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'progress',
    header: () => 'Progress',
    cell: (info) => {
      const value = info.getValue() as number;
      return (
        <div className="flex w-[150px] items-center gap-2">
          <span className="flex-1/4">{value}%</span>
          <Progress value={value} className="h-2 w-[5rem]" />
        </div>
      );
    },
  },
];

export default function DevTable() {
  const table = useReactTable({
    data: DevTableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-4 text-white">
      <Table className="rounded-md">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="cursor-pointer select-none"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: <ChevronUp className='inline mb-1 h-5 w-5'/>,
                    desc: <ChevronDown className='inline mb-1 h-5 w-5'/>,
                  }[header.column.getIsSorted() as string] ?? null}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow className='border-0' key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
