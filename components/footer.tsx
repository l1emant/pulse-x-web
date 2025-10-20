import Link from 'next/link'

const links = [
    {
        title: 'Github',
        href: 'https://github.com/l1emant/pulse-x-web',
    },
    {
        title: 'About',
        href: '/about',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between items-center gap-6">
                    <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} PulseX, All rights reserved</span>
                    <div className="flex flex-wrap gap-6 text-sm">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}