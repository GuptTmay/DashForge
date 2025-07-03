import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DropdownWrapperProps {
 children: React.ReactNode; 
 variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}



export const DropdownWrapper = (props: DropdownWrapperProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center cursor-pointer'>
           { props.children } 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>Status Bar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem disabled>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
