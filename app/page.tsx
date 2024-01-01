"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";


export default function Home() {

  return (
    <main className="" style={{ border: "1px solid black", height: "600px" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px:8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-8">
            Chat with anyone here!
          </h1>
          <p className="mt-6 text-lg leading-18 text-gray-800 dark:text-gray-300">
            you speak your language and they speak their language
          </p>
          <span className="text-indigo-500 dark:text-indigo-700">
            Let AI handle the translation
          </span>
          <div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="outline">
                {" "}
                <Link
                  href="/chat"
                  className="text-sm font-semibold text-black dark:text-white shadow-sm"
                > Get Started Today</Link>
               
              </Button>
              <Button asChild>
                <Link
                 href={"/pricing"}
                  className="text-sm font-semibold leading-6 dark:text-gray-400 text-gray-900 space-px-5"
                >
                  View Pricing <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-16">
             <Image src="" alt="gif image" width={2434} height={1000} className="rounded-md shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
