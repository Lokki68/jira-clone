import Link from "next/link"

import {GoHome, GoHomeFill, GoCheckCircle, GoCheckCircleFill} from 'react-icons/go'
import { SettingsIcon, UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
  {label: 'Home', href: '/', icon: GoHome, activeIcon: GoHomeFill},
  {label: 'Tasks', href: '/tasks', icon: GoCheckCircle, activeIcon: GoCheckCircleFill},
  {label: 'Settings', href: '/settings', icon: SettingsIcon, activeIcon: SettingsIcon},
  {label: 'Members', href: '/Members', icon: UsersIcon, activeIcon: UsersIcon},

]

export const Navigation = () => {
  return (
    <ul className='flex flex-col gap-4'>
      {
        routes.map(route => {
          const isActive = false
          const Icon = isActive ? route.activeIcon : route.icon

          return (
            <Link
              key={route.href}
              href={route.href}
            >
              <div className={cn(
                'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500',
                isActive && 'bg-white shadow-sm hover:opacity-100 text-primary' 
              )} >
                <Icon className="size-5 text-neutral-500" />
                {route.label}
              </div>
            </Link>
          )
        })
      }
    </ul>
  )
}