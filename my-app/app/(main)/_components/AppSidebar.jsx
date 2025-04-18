"use client"
import Image from 'next/image';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"; 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

import { SideBarOptions } from "../../../services/Constants"; // Corrected path

export function AppSidebar() {
    const path = usePathname();
    console.log(path);
  return (
    <Sidebar>
      <SidebarHeader className='flex items-center mt-5'>
        <Image
          src='/logo.png'
          alt="logo"
          width={200}
          height={100}
          className="w-[150px] h-[150px]"
        />
        <Button className='w-full mt-5'>
          <Plus /> Create New Interview
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <SidebarMenuItem key={index} className={'p-1'}>
                  <SidebarMenuButton asChild className={`p-5 ${path == option.path && 'bg-blue-50'}`}>
                    <Link href={option.path}>
                      {Icon && (
                        <Icon className={`text-[16px] ${path === option.path ? 'text-primary' : ''}`} />
                      )}
                      <span className={`text-[16px] font-medium ${path === option.path ? 'text-primary' : ''}`}>
                        {option.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
