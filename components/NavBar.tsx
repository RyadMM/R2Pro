"use client"

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // Add Popover imports
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { type LucideIcon, ChevronRight, Home, Image, Info, Menu, Phone, Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

// Ajouter l'import pour notre nouveau hook
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";

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
  { name: "À\u00A0propos", url: "/a-propos", icon: Info },
  { name: "Contact", url: "/contact", icon: Phone },
]

export function NavBar({ items = defaultItems, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items.length > 0 ? items[0].name : "")
  const [isMobile, setIsMobile] = useState(false)
  // const [isScrolled, setIsScrolled] = useState(false); // Removed isScrolled
  // const [isVisible, setIsVisible] = useState(true); // Removed isVisible
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesPopoverOpen, setServicesPopoverOpen] = useState(false); // Add state for popover
  const pathname = usePathname();
  const router = useRouter();

  // Dans la fonction NavBar, ajouter:
  const scrollToAnchor = useScrollToAnchor()

  // handleScroll and related useEffects for scroll/mouse listeners are removed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
      setMobileMenuOpen(false)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  useEffect(() => {
    const currentItem = items.find((item) => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  // Removed useEffect for scroll and mousemove listeners

  // Remplacer la fonction scrollToSection par:
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (items.length === 0) return null

  const servicesSubmenu = [
    { name: "Revêtement extérieur", href: "/services/revetements-exterieurs" },
    { name: "Isolation", href: "/services/isolation-exterieure" },
    { name: "Peinture au spray", href: "/services/peinture-spray" },
    { name: "Soffites et Fascias", href: "/services/soffites-fascias" },
    { name: "Portes et Fenêtres", href: "/services/portes-fenetres" },
    { name: "Calfeutrage", href: "/services/calfeutrage" },
    { name: "Gouttières", href: "/services/gouttieres" },
    { name: "Design 3D", href: "/services/design-3d" },
  ]

  return (
    <>
      {/* Version desktop */}
      <div
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block",
          "py-6", // Use fixed padding, e.g., the non-scrolled version
          // isVisible and hover logic removed, defaults to visible
          className,
        )}
      >
        <div
          className={cn(
            "flex items-center gap-6 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg transition-all duration-300",
            "bg-background/70 border border-white/30 shadow-md", // Use fixed style, e.g., the non-scrolled version
          )}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            const isFirstItem = index === 0;

            if (item.name === "Services") {
              return (
                <NavigationMenu key={item.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "cursor-pointer text-base font-medium px-5 py-2.5 rounded-full transition-colors",
                          "text-foreground/90 hover:text-primary", // Use fixed style
                          "bg-transparent hover:bg-transparent focus:bg-transparent",
                          "data-[state=open]:bg-transparent",
                        )}
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[280px] md:w-[400px] bg-white rounded-lg shadow-lg md:grid-cols-2">
                          {servicesSubmenu.map((service) => (
                            <li key={service.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  onClick={(e) => {
                                    setActiveTab("Services");
                                    router.push(service.href);
                                  }}
                                >
                                  <div className="text-sm font-medium leading-none">{service.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  setActiveTab(item.name);

                  if (item.url.includes("#")) {
                    scrollToAnchor(e, item.url);
                  } else {
                    window.scrollTo(0, 0);
                  }
                }}
                className={cn(
                  "relative cursor-pointer text-base font-medium py-2.5 rounded-full transition-colors flex items-center justify-center",
                  isFirstItem ? "pl-5 pr-5" : "px-5",
                  "text-foreground/90 hover:text-primary", // Use fixed style
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="whitespace-nowrap">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp-desktop"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Version mobile - Now uses a floating action button */}
      <div className="md:hidden">
        {/* Floating Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "fixed top-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg", // Position & Size
                "bg-background/90 border border-border/30 hover:bg-accent", // Appearance
                "transition-opacity duration-300", // Opacity will be constant
                "opacity-100", // Ensure always visible
              )}
            >
              <Menu className="h-5 w-5 text-foreground" /> {/* Adjusted icon color */}
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[85vw] max-w-[350px] border-l-primary/20">
            {/* Add visually hidden heading for accessibility */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Sheet Content remains largely the same, logo is already here */}
            <div className="flex flex-col h-full">
              <div className="p-5 border-b bg-primary/5">
                <div className="flex items-center justify-between">
                  {/* Logo inside the sheet */}
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/images/logosvg.svg" alt="R2Pro Logo" className="h-8 w-auto" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 overflow-auto py-6">
                <nav className="flex flex-col space-y-2 px-4">
                  {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name || pathname.startsWith(item.url)

                    if (item.name === "Services") {
                      const [servicesExpanded, setServicesExpanded] = useState(isActive)

                      return (
                        <div key={item.name} className="py-1">
                          <button
                            onClick={() => setServicesExpanded(!servicesExpanded)}
                            className={cn(
                              "flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-xl transition-all",
                              isActive || servicesExpanded ? "bg-primary/10 text-primary" : "hover:bg-muted",
                            )}
                          >
                            <div className="flex items-center">
                              <Icon className="mr-3 h-5 w-5" />
                              <span>Services</span>
                            </div>
                            <ChevronRight className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              servicesExpanded ? "rotate-90" : ""
                            )} />
                          </button>

                          <AnimatePresence>
                            {servicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                                  {servicesSubmenu.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className={cn(
                                        "block py-2.5 px-3 text-sm rounded-lg transition-colors",
                                        pathname === service.href
                                          ? "bg-primary/5 text-primary font-medium"
                                          : "text-muted-foreground hover:bg-muted",
                                      )}
                                      onClick={() => {
                                        setActiveTab("Services")
                                        setMobileMenuOpen(false)
                                      }}
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        className={cn(
                          "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors",
                          isActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                        onClick={() => {
                          setActiveTab(item.name)
                          setMobileMenuOpen(false)

                          if (item.url.includes("#")) {
                            // Create a mock event with preventDefault method for scrollToAnchor
                            const mockEvent = {
                              preventDefault: () => { },
                            } as React.MouseEvent<HTMLAnchorElement>

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

        {/* Bottom navigation bar */}
        <div className={cn(
          "fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border/50 shadow-lg transition-all duration-300", // Adjusted border color to match FAB
          "translate-y-0" // Ensure always visible and in place
        )}>
          <div className="flex items-center justify-around px-1 py-2">
            {items.slice(0, 5).map((item) => {
              const Icon = item.icon;
              // Updated active state logic for Services
              const isActive = item.name === "Services"
                ? pathname.startsWith("/services") || activeTab === "Services"
                : activeTab === item.name || pathname === item.url;

              if (item.name === "Services") {
                // Render Popover for Services item
                return (
                  <Popover key={item.name} open={servicesPopoverOpen} onOpenChange={setServicesPopoverOpen}>
                    <PopoverTrigger asChild>
                      <button // Use button as trigger
                        className="flex flex-col items-center justify-center w-16 py-1.5 px-1 relative focus:outline-none"
                        onClick={() => setServicesPopoverOpen(!servicesPopoverOpen)}
                        aria-label="Services Menu"
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
                        {isActive && (
                          <motion.div
                            layoutId="lamp-mobile-services" // Unique layoutId for services active indicator
                            className="absolute bottom-0 w-6 h-1 bg-primary rounded-t-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-2 mb-2 bg-background border border-border rounded-lg shadow-md" // Added background/border/shadow
                      side="top" // Position above the trigger
                      align="center" // Align center relative to the trigger
                      sideOffset={8} // Add some space between trigger and content
                    >
                      <nav className="flex flex-col space-y-1">
                        {servicesSubmenu.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className={cn(
                              "block py-2 px-3 text-sm rounded-md transition-colors",
                              pathname === service.href
                                ? "bg-accent text-accent-foreground font-medium" // Style for active service link
                                : "text-foreground hover:bg-accent hover:text-accent-foreground", // Style for inactive service link
                            )}
                            onClick={() => {
                              setActiveTab("Services"); // Keep Services tab active
                              setServicesPopoverOpen(false); // Close popover on click
                              router.push(service.href); // Navigate
                              window.scrollTo(0, 0);
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </nav>
                    </PopoverContent>
                  </Popover>
                );
              } else {
                // Render standard Link for other items
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="flex flex-col items-center justify-center w-16 py-1.5 px-1 relative" // Added relative positioning
                    onClick={(e) => {
                      setActiveTab(item.name);
                      if (item.url.includes("#")) {
                        const mockEvent = { preventDefault: () => { } } as React.MouseEvent<HTMLAnchorElement>;
                        scrollToAnchor(mockEvent, item.url);
                      } else {
                        window.scrollTo(0, 0);
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
                    {isActive && (
                      <motion.div
                        layoutId={`lamp-mobile-${item.name}`} // Unique layoutId per item
                        className="absolute bottom-0 w-6 h-1 bg-primary rounded-t-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}
