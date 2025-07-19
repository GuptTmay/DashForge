import foxIcon from '../assets/foxIcon.png';
import { AppSidebar } from '@/components/AppSidebar';
import { ModeToggle } from '@/components/mode-toggle';
import { Input } from '@/components/ui/input';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Heart, Info, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Layout = () => {
  const [actPage, setActPage] = useState('Dashboard');

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar actPage={actPage} setActPage={setActPage} />

        <div className="flex flex-1 h-full flex-col justify-between">
          <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b dark:bg-black/60 bg-black/10 p-4 backdrop-blur-xs">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex flex-col">
                <p className="text-muted-foreground text-sm">
                  Pages / {actPage}
                </p>
                <h1 className="text-xl font-semibold">{actPage}</h1>
              </div>
            </div>

            <div className="bg-primary-foreground hidden items-center gap-4 rounded-full px-4 py-3 sm:flex">
              <div className="bg-accent relative rounded-4xl">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="rounded-full pl-9"
                />
              </div>
              <Button variant="ghost" size="ricon">
                <Bell />
              </Button>
              <Button variant="ghost" size="ricon">
                <Info />
              </Button>
              <ModeToggle />
              <Avatar className="cursor-pointer">
                <AvatarImage src={foxIcon} />
                <AvatarFallback>Fox</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <main className="p-4 flex-1">
            <Outlet />
          </main>

          <footer className="flex flex-col text-xs sm:text-sm items-center justify-between px-6 pb-4 sm:pb-2 gap-2  sm:flex-row">
            <p className="flex items-center ">
              &copy; 2025 DashForge All Rights Reserved. Made with
              <Heart className="mx-0.5 h-4 fill-red-500 text-transparent" />
              <Button variant="link" className="p-0">
                <a target="_blank" href="https://github.com/GuptTmay">
                  Tanmay
                </a>
              </Button>
            </p>
            <ul className="flex flex-wrap justify-center  sm:gap-2 sm:justify-end">
              <Button variant="link">
                <a href="/">Dashboard</a>
              </Button>
              <Button variant="link">
                <a href="/marketplace">Marketplace</a>
              </Button>
              <Button variant="link">
                <a href="/tables">Tables</a>
              </Button>
              <Button variant="link">
                <a href="/kanban">Kanban</a>
              </Button>
              <Button variant="link">
                <a href="/signin">SignIn</a>
              </Button>
            </ul>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
