"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Brain, Radius, Sigma, FlaskRound as Flask, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute h-4 w-4 rounded-full bg-chart-1 animate-float-slow left-1/4 top-1/5"></div>
        <div className="absolute h-3 w-3 rounded-full bg-chart-2 animate-float-medium right-1/3 top-1/4"></div>
        <div className="absolute h-5 w-5 rounded-full bg-chart-3 animate-float-fast left-1/3 bottom-1/4"></div>
        <div className="absolute h-6 w-6 rounded-full bg-chart-4 animate-float-slow right-1/4 bottom-1/5"></div>
        <div className="absolute h-2 w-2 rounded-full bg-chart-5 animate-float-medium left-1/5 top-1/3"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 -mb-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-l font-poppins tracking-tight sm:text-5xl md:text-6xl">
              explore the world of
              <span className="block text-5xl font-poppins font-medium bg-gradient-to-r from-chart-4 via-chart-5 to-chart-1 bg-clip-text text-transparent mt-2">
                molecules
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-sm italic font-light text-muted-foreground"
          >
            Your comprehensive database of elements, molecules, and chemical reactions.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <div className="w-full max-w-md flex">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search elements, molecules..."
                  className="w-full h-8 pl-10 pr-4 rounded-l-lg border-r-0 "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <Button className="h-8 rounded-l-none px-6">
                Search
              </Button>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex justify-center gap-1"
          >
            <Link href="/elements">
              <Button variant="outline" size="lg" className="gap-2 px-4">
                <Radius className="h-5 w-5" />
                Elements
              </Button>
            </Link>
            <Link href="/molecules">
              <Button variant="outline" size="lg" className="gap-2 px-4">
                <Flask className="h-5 w-5" />
                Molecules
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-1 flex justify-center gap-1"
          >
            <Link href="/calculator">
              <Button variant="outline" size="lg" className="gap-2">
                <Sigma className="h-5 w-5" />
                Chemistry Calculator 2.0
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-1 flex justify-center gap-1"
          >
            <Link href="/calculator">
              <Button variant="outline" size="lg" className="gap-2">
                <Brain className="h-5 w-5" />
                Expert Chat with ElemixAI
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}