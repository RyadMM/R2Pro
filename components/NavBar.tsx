// ✅ NavBar.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor"
import { cn } from "@/lib/utils"
import { type LucideIcon, Home, Image, Info, Menu, Phone, Wrench } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items?: NavItem[]
  className?: string
}

const defaultItems: NavItem[] = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Wrench },
  { name: "Réalisations", url: "/realisations", icon: Image },
  { name: "À\u00a0propos", url: "/a-propos", icon: Info },
  { name: "Contact", url: "/contact", icon: Phone },
]

export function NavBar({ items = defaultItems, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || "")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const scrollToAnchor = useScrollToAnchor()

  useEffect(() => {
    let newActiveTab = ""
    const exactMatch = items.find(item => item.url === pathname)
    if (exactMatch) newActiveTab = exactMatch.name
    else {
      const startsWith = items
        .filter(item => item.url !== "/")
        .filter(item => pathname.startsWith(item.url))
        .sort((a, b) => b.url.length - a.url.length)
      if (startsWith.length > 0) newActiveTab = startsWith[0].name
    }
    setActiveTab(newActiveTab)
  }, [pathname, items])

  return (
    <>
      <div className="md:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg bg-background/90 border border-border/30 hover:bg-accent"
            >
              <Menu className="h-5 w-5 text-foreground" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[85vw] max-w-[350px] border-l-primary/20">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="p-5 border-b bg-primary/5">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/images/logosvg.svg" alt="R2Pro Logo" className="h-8 w-auto" />
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-6">
                <nav className="flex flex-col space-y-2 px-4">
                  {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        className={cn(
                          "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors",
                          isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
                        )}
                        onClick={() => {
                          setActiveTab(item.name)
                          setMobileMenuOpen(false)
                          if (item.url.includes("#")) {
                            const mockEvent = { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>
                            scrollToAnchor(mockEvent, item.url)
                          } else {
                            window.scrollTo(0, 0)
                          }
                        }}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </nav>
              </div>
              <div className="p-5 border-t mt-auto bg-primary/5">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demander une soumission
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Sticky Bottom Navbar */}
        <div
          id="mobile-bottom-nav"
          className="sticky bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border/50 shadow-lg min-h-[56px]"
        >
          <div className="flex items-center justify-around px-1 py-2">
            {items.slice(0, 5).map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name
              return (
                <Link
                  key={item.name}
                  href={item.url}
                  className="flex flex-col items-center justify-center w-16 py-1.5 px-1 relative"
                  onClick={(e) => {
                    setActiveTab(item.name)
                    if (item.url.includes("#")) {
                      const mockEvent = { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>
                      scrollToAnchor(mockEvent, item.url)
                    } else {
                      window.scrollTo(0, 0)
                    }
                  }}
                >
                  <div className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full mb-1 transition-colors",
                    isActive ? "bg-primary/10" : "bg-transparent"
                  )}>
                    <Icon className={cn(
                      "h-5 w-5 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}>
                    {item.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
