'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Logout } from '@/components/logout'
import { useScrollTracker } from '@/hooks/use-scroll-tracker'

export const DashboardHeader = () => {
    const { isScrolled } = useScrollTracker()

    const navContainerClasses = cn(
        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
        isScrolled && 'max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5'
    )

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={navContainerClasses}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        <div className="flex items-center gap-3">
                            <ModeToggle />
                            <Logout />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}