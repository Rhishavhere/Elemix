"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, FlaskRound as Flask, Atom, BookOpen, Activity, Radius, Calculator } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Atom className="h-6 w-6 text-chart-1" />
              <span className="font-oswald font-regular sm:block text-black/70">elemix</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/elements" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-1.5">
              <Atom className="h-4 w-4" />
              <span>Elements</span>
            </Link>
            <Link href="/molecules" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-1.5">
              <Flask className="h-4 w-4" />
              <span>Molecules</span>
            </Link>
            <Link href="/reactions" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-1.5">
              <Activity className="h-4 w-4" />
              <span>Reactions</span>
            </Link>
            <Link href="/learn" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>Learn</span>
            </Link>
            <Link href="/calculator" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-1.5">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {!isSearchOpen ? (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
                <ThemeToggle />
              </>
            ) : (
              <div className="relative flex items-center">
                <Input 
                  type="search" 
                  placeholder="Search elements, molecules..." 
                  className="w-64 pr-8"
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 rounded-full"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center space-x-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-3 px-2">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search elements, molecules..." 
                className="w-full pr-8"
                autoFocus
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 rounded-full"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 px-2 border-t border-border space-y-1">
            <Link 
              href="/elements" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Atom className="h-5 w-5" />
              <span>Elements</span>
            </Link>
            <Link 
              href="/molecules" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Flask className="h-5 w-5" />
              <span>Molecules</span>
            </Link>
            <Link 
              href="/reactions" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Activity className="h-5 w-5" />
              <span>Reactions</span>
            </Link>
            <Link 
              href="/learn" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link 
              href="/calculator" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calculator className="h-5 w-5" />
              <span>Calculator</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}