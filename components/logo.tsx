import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <path d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z" fill="url(#paint0_linear_7697_8782)" />
                <path d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z" fill="url(#paint1_linear_7697_8782)" />
                <defs>
                    <linearGradient id="paint0_linear_7697_8782" x1="20" y1="-0.997096" x2="20" y2="33.7931" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#75D8FC" />
                        <stop offset="1" stopColor="#0072E5" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_7697_8782" x1="20" y1="-0.997096" x2="20" y2="33.7931" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#75D8FC" />
                        <stop offset="1" stopColor="#0072E5" />
                    </linearGradient>
                </defs>
            </svg>
            <span className="text-xl font-bold text-foreground">PulseX</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('h-8 w-8', className)}>
            <path d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z" fill="url(#paint0_linear_icon)" />
            <path d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z" fill="url(#paint1_linear_icon)" />
            <defs>
                <linearGradient id="paint0_linear_icon" x1="20" y1="-0.997096" x2="20" y2="33.7931" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#75D8FC" />
                    <stop offset="1" stopColor="#0072E5" />
                </linearGradient>
                <linearGradient id="paint1_linear_icon" x1="20" y1="-0.997096" x2="20" y2="33.7931" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#75D8FC" />
                    <stop offset="1" stopColor="#0072E5" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 71 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M61.25 1.625L70.75 1.5625C70.75 4.77083 70.25 7.79167 69.25 10.625C68.2917 13.4583 66.8958 15.9583 65.0625 18.125C63.2708 20.25 61.125 21.9375 58.625 23.1875C56.1667 24.3958 53.4583 25 50.5 25C46.875 25 43.6667 24.2708 40.875 22.8125C38.125 21.3542 35.125 19.2083 31.875 16.375C29.75 14.4167 27.7917 12.8958 26 11.8125C24.2083 10.7292 22.2708 10.1875 20.1875 10.1875C18.0625 10.1875 16.25 10.7083 14.75 11.75C13.25 12.75 12.0833 14.1875 11.25 16.0625C10.4583 17.9375 10.0625 20.1875 10.0625 22.8125L0 22.9375C0 19.6875 0.479167 16.6667 1.4375 13.875C2.4375 11.0833 3.83333 8.64583 5.625 6.5625C7.41667 4.47917 9.54167 2.875 12 1.75C14.5 0.583333 17.2292 0 20.1875 0C23.8542 0 27.1042 0.770833 29.9375 2.3125C32.8125 3.85417 35.7708 5.97917 38.8125 8.6875C41.1042 10.7708 43.1042 12.3333 44.8125 13.375C46.5625 14.375 48.4583 14.875 50.5 14.875C52.6667 14.875 54.5417 14.3125 56.125 13.1875C57.75 12.0625 59 10.5 59.875 8.5C60.7917 6.5 61.25 4.20833 61.25 1.625Z"
                fill="none"
                strokeWidth={0.5}
                stroke="currentColor"
            />
        </svg>
    )
}
