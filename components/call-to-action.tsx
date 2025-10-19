import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Meteors } from '@/components/ui/meteors'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-3xl"></div>
                    <div className="relative rounded-xl bg-card border border-border p-12 md:p-16 lg:p-20 shadow-sm text-center overflow-hidden">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Ready to Track Crypto?</h2>
                    <p className="mt-4 text-muted-foreground">Join the PulseX and track hundreds of cryptocurrencies in one place.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/signup">
                                <span>Start Now</span>
                            </Link>
                        </Button>
                    </div>
                        <Meteors number={15} />
                    </div>
                </div>
            </div>
        </section>
    )
}