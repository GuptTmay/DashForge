import DevTable from '@/components/Tables/DevTable';
import { DropdownWrapper } from '@/components/DropdownWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import CheckTable from '@/components/Tables/CheckTable';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { returnStatus } from '@/lib/utilsFunc';
import { ComplexTableData } from '@/lib/data';
import ColTable from '@/components/Tables/ColTable';

export const Tables = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Card className="flex flex-1/2">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl">Development Table</CardTitle>
            <DropdownWrapper>
              <Button size="icon" variant="outline">
                <MoreHorizontal />
              </Button>
            </DropdownWrapper>
          </CardHeader>
          <CardContent>
            <DevTable />
          </CardContent>
        </Card>

        <Card className="flex flex-1/2">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl">Check Table</CardTitle>
            <DropdownWrapper>
              <Button size="icon" variant="outline">
                <MoreHorizontal />
              </Button>
            </DropdownWrapper>
          </CardHeader>
          <CardContent>
            <CheckTable />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Card className="flex flex-1/2">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl">4 Column Table</CardTitle>
            <DropdownWrapper>
              <Button size="icon" variant="outline">
                <MoreHorizontal />
              </Button>
            </DropdownWrapper>
          </CardHeader>
          <CardContent>
            <ColTable />
          </CardContent>
        </Card>

        <Card className="flex flex-1/2 gap-4">
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
                  <TableRow key={index} className='border-0'>
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
      </div>
    </div>
  );
};
