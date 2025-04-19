"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { SideBarOptions } from "../../../services/Constants";

export function AppSidebar() {
  const path = usePathname();

  return (
    <Sidebar className="min-w-[250px] max-w-[260px] bg-white border-r shadow-xl">
      {/* Logo + CTA Button */}
      <SidebarHeader className="flex flex-col items-center justify-center py-8 space-y-5">
        <div className="p-2 bg-white rounded-full shadow-lg">
          <Image
            src="/logo.png"
            alt="FitSync Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <Button className="w-[90%] bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold text-sm py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Create Interview
        </Button>
      </SidebarHeader>

      {/* Navigation Menu */}
      <SidebarContent className="mt-4 px-2">
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((option, index) => {
              const Icon = option.icon;
              const isActive = path === option.path;

              return (
                <SidebarMenuItem key={index} className="my-1">
                  <SidebarMenuButton
                    asChild
                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 shadow-inner"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Link href={option.path} className="flex items-center w-full gap-3">
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                            isActive
                              ? "text-blue-700"
                              : "text-gray-500 group-hover:text-gray-700"
                          }`}
                        />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-blue-700" : "text-gray-800"
                        }`}
                      >
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

      {/* Footer */}
      <SidebarFooter className="py-5 border-t border-gray-200 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-600">FitSync AI</span>
      </SidebarFooter>
    </Sidebar>
  );
}
