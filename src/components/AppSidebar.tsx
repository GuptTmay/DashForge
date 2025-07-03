import {
  Home,
  ShoppingCartIcon,
  ChartNoAxesColumn,
  UserRound,
  LockKeyhole,
  Anvil,
  HelpCircle,
  Settings,
  LayoutDashboard,
  Search,
  Bell,
  Info,
} from 'lucide-react';
import foxIcon from '../assets/foxIcon.png';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useNavigate } from 'react-router-dom';
import { Card, CardDescription, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const items = [
  {
    id: 1,
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    url: '/marketplace',
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    title: 'Tables',
    url: '/tables',
    icon: ChartNoAxesColumn,
  },
  {
    id: 4,
    title: 'Kanban',
    url: '/kanban',
    icon: LayoutDashboard,
  },
  {
    id: 5,
    title: 'Profile',
    url: '/profile',
    icon: UserRound,
  },
  {
    id: 6,
    title: 'Sign In',
    url: '/signin',
    icon: LockKeyhole,
  },
];

const moreItems = [
  {
    id: 7,
    title: 'Help',
    url: '/404',
    icon: HelpCircle,
  },
  {
    id: 8,
    title: 'Setting',
    url: '/404',
    icon: Settings,
  },
];

interface AppSidebarProps {
  actPage: string;
  setActPage: (title: string) => void;
}

export function AppSidebar({ actPage, setActPage }: AppSidebarProps) {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-around p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
            <Anvil className="h-6 w-6 text-gray-300" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              DashForge
            </h1>
            <p className="text-xs text-gray-400">Feels Like God's Eyes</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="block sm:hidden">
            <SidebarGroupLabel>Widgets</SidebarGroupLabel>
            <div className="bg-primary-foreground flex flex-col items-center gap-2 rounded-2xl px-4 py-4 shadow-sm">
              {/* Search */}
              <div className="relative w-full">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="bg-accent w-full rounded-full pl-9 text-sm"
                />
              </div>

              {/* Icon Buttons */}
              <div className="flex items-center gap-2 rounded-full p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Bell className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notification</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ModeToggle />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mode</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="h-8 w-8 cursor-pointer">
                      <AvatarImage src={foxIcon} />
                      <AvatarFallback>Fox</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Profile</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </SidebarGroupContent>
          <SidebarGroupLabel>Tabs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild isActive={actPage === item.title}>
                    <div
                      onClick={() => {
                        setActPage(item.title);
                        navigate(item.url);
                      }}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>More</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mb-5">
              {moreItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild isActive={actPage === item.title}>
                    <div
                      onClick={() => {
                        setActPage(item.title);
                        navigate(item.url);
                      }}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Card className="bg-secondary relative flex flex-col items-center gap-2">
          <div
            onClick={() => navigate('/404')}
            className="border-b-border bg-sidebar absolute -top-1/4 cursor-pointer rounded-full p-1"
          >
            <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-gray-700 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
              <Anvil className="h-6 w-6 text-gray-300" />
            </div>
          </div>
          <CardHeader className="mt-4 w-full text-center">
            Upgrade To Pro
          </CardHeader>
          <CardDescription className="text-center">
            <p>To Get access to all features!</p>
            <p>Connect to nextgen World</p>
          </CardDescription>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
