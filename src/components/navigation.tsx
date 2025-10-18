"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Menu, Moon, Sun } from "lucide-react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">V</span>
            </div>
            <span className="text-xl font-semibold">Velocity</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDark} onCheckedChange={toggleTheme} />
              <Moon className="h-4 w-4" />
            </div>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDark} onCheckedChange={toggleTheme} />
              <Moon className="h-4 w-4" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <a href="#home" className="w-full">
                    Home
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#features" className="w-full">
                    Features
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#pricing" className="w-full">
                    Pricing
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#about" className="w-full">
                    About
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#signin" className="w-full">
                    Sign In
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
