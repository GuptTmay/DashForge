import { CheckTableData } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import type { ColumnDef } from '@tanstack/table-core';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronDown, ChevronUp } from 'lucide-react';

const columns: ColumnDef<(typeof CheckTableData)[0]>[] = [
  {
    accessorKey: 'title',
    header: () => 'Title',
    cell: (info) => {
      const value = info.getValue() as string;
      return (
        <div className="flex w-[180px] items-center gap-2 font-medium">
          <Checkbox id={`title`} />
          <Label htmlFor={`title`}>{value}</Label>
        </div>
      );
    },
  },
  {
    accessorKey: 'percentage',
    header: () => 'Percentage',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'value',
    header: () => 'Value',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'date',
    header: () => 'Date',
    cell: (info) => info.getValue(),
  },
];

const CheckTable = () => {
  const table = useReactTable({
    data: CheckTableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Table>
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
  );
};

export default CheckTable;
