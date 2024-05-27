"use client"
import * as React from "react"
import { Sun, Moon } from "lucide-react";
import {Button, buttonVariants} from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 ">
          <div className="flex justify-center gap-x-5"> 
            <Link className={buttonVariants({variant: "outline"})} href={"/nowa"}>Druga strona</Link>
            <ModeToggle/>
          </div>
            <h1 className=" bg-clip-text text-7xl text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 font-mono font-bold">
                Mateusz Domański
            </h1>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xl font-semibold ">
                @nr_albumu/121980
            </code>
            
        </main>
    );
}
