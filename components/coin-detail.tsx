"use client";

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

interface CoinData {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
      market_cap: number;
      volume_24h: number;
    };
  };
}

interface CoinDetailProps {
  coinId: string;
}

export default function CoinDetail({ coinId }: CoinDetailProps) {
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [relatedCoins, setRelatedCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`/api/crypto/${coinId}`);
        const result = await response.json();
        setCoinData(result.data[coinId]);
        
        // Fetch related coins data
        const relatedIds = ['1', '1027', '1839', '52', '5426'].filter(id => id !== coinId);
        const relatedResponse = await fetch(`/api/crypto/${relatedIds.join(',')}`);
        const relatedResult = await relatedResponse.json();
        const relatedCoinsData = Object.values(relatedResult.data).slice(0, 4);
        setRelatedCoins(relatedCoinsData as CoinData[]);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoinData();
  }, [coinId]);

  useEffect(() => {
    if (!coinData) return;

    const getSymbol = () => {
      const symbolMap: Record<string, string> = {
        'BTC': 'BINANCE:BTCUSDT',
        'ETH': 'BINANCE:ETHUSDT',
        'BNB': 'BINANCE:BNBUSDT',
        'XRP': 'BINANCE:XRPUSDT',
        'SOL': 'BINANCE:SOLUSDT',
        'TRX': 'BINANCE:TRXUSDT',
        'LINK': 'BINANCE:LINKUSDT',
        'LTC': 'BINANCE:LTCUSDT'
      };
      
      if (symbolMap[coinData.symbol]) {
        return symbolMap[coinData.symbol];
      }
      
      const fallbackMap: Record<string, string> = {
        'ADA': 'COINBASE:ADAUSD',
        'DOT': 'COINBASE:DOTUSD',
        'MATIC': 'COINBASE:MATICUSD'
      };
      
      return fallbackMap[coinData.symbol] || `COINBASE:${coinData.symbol}USD`;
    };

    const symbol = getSymbol();

    const loadScript = (src: string, containerId: string, config: Record<string, unknown>) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      container.innerHTML = '';
      
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = true;
      script.text = JSON.stringify(config);
      
      const div = document.createElement('div');
      div.className = 'tradingview-widget-container';
      div.style.height = '100%';
      div.style.width = '100%';
      
      div.appendChild(script);
      container.appendChild(div);
    };

    const timer = setTimeout(() => {
      loadScript(
        'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js',
        'tradingview-chart',
        {
          symbols: [[symbol]],
          chartOnly: false,
          width: "100%",
          height: "100%",
          locale: "en",
          colorTheme: "dark",
          autosize: true,
          showVolume: false,
          showMA: false,
          hideDateRanges: false,
          hideMarketStatus: false,
          hideSymbolLogo: false,
          scalePosition: "right",
          scaleMode: "Normal",
          fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          fontSize: "10",
          noTimeScale: false,
          valuesTracking: "1",
          changeMode: "price-and-percent",
          chartType: "area"
        }
      );

      loadScript(
        'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js',
        'tradingview-technical',
        {
          interval: "1D",
          width: "100%",
          isTransparent: false,
          height: "100%",
          symbol,
          showIntervalTabs: true,
          displayMode: "single",
          locale: "en",
          colorTheme: "dark"
        }
      );

      loadScript(
        'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js',
        'tradingview-news',
        {
          feedMode: "symbol",
          symbol,
          colorTheme: "dark",
          isTransparent: false,
          displayMode: "regular",
          width: "100%",
          height: "100%",
          locale: "en"
        }
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [coinData]);

  if (loading) {
    return (
      <div className="pt-24 p-6 max-w-7xl mx-auto">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-[500px]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-[300px]" />
              <Skeleton className="h-[300px]" />
            </div>
          </div>
          <Skeleton className="h-[800px]" />
        </div>
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="pt-24 p-6 max-w-7xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Coin not found</h1>
        <Link href="/dashboard" className="text-primary hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const isPositive = coinData.quote.USD.percent_change_24h >= 0;

  return (
    <div className="pt-24 p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard" className="p-2 hover:bg-muted rounded-lg transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="relative">
          <img 
            src={`https://assets.coincap.io/assets/icons/${coinData.symbol.toLowerCase()}@2x.png`}
            alt={coinData.symbol}
            className="w-8 h-8 rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const nextElement = target.nextElementSibling as HTMLElement;
              nextElement?.classList.remove('hidden');
            }}
          />
          <div className={`hidden w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold`}>
            {coinData.symbol.charAt(0)}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{coinData.name}</h1>
            <span className="text-muted-foreground">• {coinData.symbol}</span>
            <Star className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-3xl font-bold">
              ₹{(coinData.quote.USD.price * 83).toLocaleString('en-IN', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </span>
            <span className={`text-lg font-medium ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}>
              {isPositive ? '+' : ''}{coinData.quote.USD.percent_change_24h.toFixed(2)}% ({isPositive ? '+' : ''}1.4%)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-xl border bg-card overflow-hidden">
            <div id="tradingview-chart" className="w-full h-[500px]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-card overflow-hidden">
              <div id="tradingview-technical" className="w-full h-[400px]"></div>
            </div>
            
            <div className="rounded-xl border bg-card overflow-hidden">
              <div id="tradingview-news" className="w-full h-[400px]"></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Today&apos;s Range</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Open:
                    </span>
                    <span className="text-sm font-medium">
                      ₹{(coinData.quote.USD.price * 83).toLocaleString('en-IN', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      High:
                    </span>
                    <span className="text-sm font-medium text-green-500">
                      ₹{(coinData.quote.USD.price * 1.02 * 83).toLocaleString('en-IN', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Low:
                    </span>
                    <span className="text-sm font-medium text-red-500">
                      ₹{(coinData.quote.USD.price * 0.98 * 83).toLocaleString('en-IN', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      })}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">More Info</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Market Cap:
                    </span>
                    <span className="text-sm font-medium">
                      ₹{(coinData.quote.USD.market_cap * 83 / 1000000000).toFixed(2)}B
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      24h Volume:
                    </span>
                    <span className="text-sm font-medium">
                      ₹{(coinData.quote.USD.volume_24h * 83 / 1000000000).toFixed(2)}B
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      Currency:
                    </span>
                    <span className="text-sm font-medium">INR</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Related Coins</h3>
            <div className="space-y-3">
              {relatedCoins.map((coin) => {
                const isPositive = coin.quote.USD.percent_change_24h >= 0;
                return (
                  <Link key={coin.id} href={`/dashboard/coin/${coin.id}`} className="block">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img 
                            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                            alt={coin.symbol}
                            className="w-8 h-8 rounded-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const nextElement = target.nextElementSibling as HTMLElement;
                              nextElement?.classList.remove('hidden');
                            }}
                          />
                          <div className="hidden w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            {coin.symbol.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{coin.name}</div>
                          <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          ₹{(coin.quote.USD.price * 83).toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </div>
                        <div className={`text-xs ${
                          isPositive ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {isPositive ? '+' : ''}{coin.quote.USD.percent_change_24h.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}