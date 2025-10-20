'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How accurate is the real-time price data?',
            answer: 'Our price data is sourced from multiple top-tier exchanges and updated every few seconds. We aggregate data from many exchanges to provide the most accurate market prices.',
        },
        {
            id: 'item-2',
            question: 'Can I track multiple cryptocurrencies?',
            answer: 'Yes! PulseX allows you to track multiple cryptocurrencies, perfect for separating different investment strategies.',
        },
        {
            id: 'item-3',
            question: 'How many cryptocurrencies can I track?',
            answer: "PulseX supports over 100 cryptocurrencies including Bitcoin, Ethereum, and all major altcoins. We&apos;re constantly adding new tokens as they gain market traction.",
        },
        {
            id: 'item-4',
            question: 'Do you offer mobile apps?',
            answer: 'Yes, we also have an Android app with all the features of the web platform, allowing you to keep track of cryptocurrencies on the go.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-2xl"></div>
                    <Accordion
                        type="single"
                        collapsible
                        className="relative bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact{' '}
                        <Link
                            href="mailto:support@pulsex.com"
                            className="text-primary font-medium hover:underline">
                            our team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
