"use client"
import * as React from "react"
import {Sun, Moon} from "lucide-react"
import { cn } from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Link from "next/link";



const notifications = [
    {
        title: "Zmieniaj gdzie tylko chcesz, kiedy chcesz",
        description: "i jak chcesz",
    },
    
]

type CardProps = React.ComponentProps<typeof Card>

function ModeToggle() {
    const { setTheme } = useTheme();

    const handleThemeToggle = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <div className="flex items-center space-x-2">
            <Sun className="h-6 w-6 transition-colors text-yellow-500" />
            <Switch onCheckedChange={handleThemeToggle} />
            <Moon className="h-6 w-6 transition-colors text-gray-500" />
        </div>
    );
}



function CardDemo({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>Ustawienia</CardTitle>
                <CardDescription>wyglądu lorem ipsum.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                   
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Zmień tryb przeglądania
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Tu też możesz to zrobić.
                        </p>
                    </div>
                    <ModeToggle />
                    
                </div>
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Link className={`${buttonVariants({variant: "default"})} w-full mr-2`} href={"/"}>
                    <span className="h-4 w-4"></span>
                    Wróć do poprzedniej strony
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function Nowa() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-5 ">
            <h1 className=" bg-clip-text text-7xl text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 font-mono font-bold">wygląd</h1>
            <CardDemo />
      
        </div>
    );
}