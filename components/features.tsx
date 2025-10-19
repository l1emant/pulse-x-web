import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TrendingUp, Shield, Palette } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id="features" className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Why Choose PulseX?</h2>
                    {/* <p className="mt-4">Essential cryptocurrency tracking tools with real-time market data and secure user authentication.</p> */}
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 items-stretch">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl"></div>
                        <Card className="relative group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <TrendingUp
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">Live Market Data</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="mt-3 text-sm">Access real-time cryptocurrency prices and market information for major digital assets with reliable data feeds.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl"></div>
                        <Card className="relative group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Shield
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">Secure Authentication</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="mt-3 text-sm">Protected user accounts with modern authentication system ensuring your data and preferences stay secure.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl"></div>
                        <Card className="relative group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Palette
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">Clean Interface</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="mt-3 text-sm">Modern, responsive design with intuitive navigation and dark/light theme support for optimal viewing experience.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
