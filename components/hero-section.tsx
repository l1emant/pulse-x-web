import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pt-12 pb-16 lg:pt-44 lg:pb-24">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:grid lg:grid-cols-2 lg:gap-12">
                            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-semibold lg:text-6xl lg:mt-16 leading-tight lg:leading-tight">Track Crypto Prices in Real Time</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg pr-12 lg:pr-16">Monitor live prices and stay updated with key market trends all in one clean dashboard</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="/signup">
                                            <span className="text-nowrap">Start Tracking</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#features">
                                            <span className="text-nowrap">Learn More</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="order-first lg:order-last flex justify-center lg:items-start lg:pt-8 lg:h-[420px] lg:-mb-4 relative overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-24 bg-blue-500/8 dark:bg-blue-400/12 blur-3xl rounded-full -z-10"></div>
                                <Image
                                    className="h-[450px] w-auto object-contain object-top sm:h-[530px] lg:h-[580px] lg:overflow-visible"
                                    src="/phone_mockup.png"
                                    alt="PulseX Mobile App Mockup"
                                    height="650"
                                    width="450"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-8 md:pb-16">
                    <div className="group relative mx-auto max-w-6xl pl-6 pr-48">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-24 bg-blue-500/8 dark:bg-blue-400/12 blur-3xl rounded-full -z-10 overflow-visible"></div>
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-right text-sm">Track the market leaders</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                                                alt="Bitcoin"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">BTC</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                                                alt="Ethereum"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">ETH</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                                alt="Tether"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">USDT</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                                                alt="BNB"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">BNB</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                                                alt="Solana"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">SOL</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                                                alt="USDC"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">USDC</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
                                                alt="XRP"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">XRP</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
                                                alt="Dogecoin"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">DOGE</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
                                                alt="Cardano"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">ADA</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <img
                                                className="h-7 w-7 object-contain"
                                                src="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
                                                alt="Avalanche"
                                                height="28"
                                                width="28"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">AVAX</span>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
