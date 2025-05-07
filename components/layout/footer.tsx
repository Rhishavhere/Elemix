import Link from 'next/link';
import { Atom, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Atom className="h-6 w-6 text-chart-1" />
              <span>Elemix</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              A comprehensive chemistry library with detailed information on elements and molecules.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Explore</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/elements" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Periodic Table
                  </Link>
                </li>
                <li>
                  <Link href="/molecules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Molecular Database
                  </Link>
                </li>
                <li>
                  <Link href="/reactions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Chemical Reactions
                  </Link>
                </li>
                <li>
                  <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Educational Resources
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Elemix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}