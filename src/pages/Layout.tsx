import foxIcon from '../assets/foxIcon.png';
import { AppSidebar } from '@/components/AppSidebar';
import { ModeToggle } from '@/components/mode-toggle';
import { Input } from '@/components/ui/input';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Info, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Layout = () => {
  const [actPage, setActPage] = useState('Dashboard');

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar actPage={actPage} setActPage={setActPage} />

        <main className="flex flex-1 flex-col">
            <header className="flex sticky w-full items-center backdrop-blur-xs z-10 top-0 justify-between border-b p-4">
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

          <section className="p-4">
            <Outlet />
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
