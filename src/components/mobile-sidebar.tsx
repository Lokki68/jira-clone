'use client'

import {useEffect, useState} from "react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";
import {Sidebar} from "@/components/sidebar";
import {usePathname} from "next/navigation";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    setIsOpen(false)
  }, [pathname]);

  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen} >
        <SheetTrigger asChild>
          <Button size='icon' variant='secondary' className='lg:hidden' >
            <MenuIcon className='size-4 text-neutral-500' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='p-0' >
          <Sidebar />
        </SheetContent>
      </Sheet>
  )
}