"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      volume_24h: number;
    };
  };
}

const formatUSD = (num: number) => {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(1)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
  return `$${num.toFixed(2)}`;
};

export default function CryptoDashboard() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [filteredData, setFilteredData] = useState<CryptoData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCryptoData = useCallback(async (pageNum: number, append = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setLoadingMore(true);
      
      const start = (pageNum - 1) * 20 + 1;
      const response = await fetch(`/api/crypto?start=${start}&limit=20&sort=market_cap&sort_dir=desc`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.data && result.data.length > 0) {
        const sortedData = result.data.sort((a: CryptoData, b: CryptoData) => 
          b.quote.USD.market_cap - a.quote.USD.market_cap
        );
        setCryptoData(prev => append ? [...prev, ...sortedData] : sortedData);
        setFilteredData(prev => append ? [...prev, ...sortedData] : sortedData);
        if (sortedData.length < 20 || start + sortedData.length >= 100) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCryptoData(nextPage, true);
    }
  };

  useEffect(() => {
    fetchCryptoData(1);
    const interval = setInterval(() => fetchCryptoData(1), 120000);
    return () => clearInterval(interval);
  }, [fetchCryptoData]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = cryptoData.filter(crypto => 
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(cryptoData);
    }
  }, [searchTerm, cryptoData]);

  if (loading) {
    return (
      <div className="pt-24 p-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              <div className="grid grid-cols-6 gap-4 px-6 py-3 border-b border-border">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-16" />
                ))}
              </div>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 px-6 py-4 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-3 w-12 mt-1" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getCryptoIcon = (symbol: string) => {
    const iconUrl = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
    return (
      <img 
        src={iconUrl} 
        alt={symbol}
        className="w-8 h-8 rounded-full"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('hidden');
        }}
      />
    );
  };

  const getFallbackIcon = (symbol: string) => {
    const iconConfig = {
      'BTC': { bg: 'bg-orange-500', text: '₿' },
      'ETH': { bg: 'bg-slate-600', text: 'Ξ' },
      'BNB': { bg: 'bg-yellow-500', text: 'B' },
      'XRP': { bg: 'bg-slate-700', text: 'X' },
      'ADA': { bg: 'bg-blue-500', text: 'A' },
      'SOL': { bg: 'bg-gradient-to-r from-purple-400 to-pink-400', text: 'S' },
      'DOGE': { bg: 'bg-yellow-400', text: 'Ð' },
      'DOT': { bg: 'bg-pink-500', text: '●' },
      'AVAX': { bg: 'bg-red-500', text: 'A' },
      'MATIC': { bg: 'bg-purple-600', text: 'M' },
      'USDT': { bg: 'bg-green-500', text: '₮' },
      'USDC': { bg: 'bg-blue-600', text: '$' },
      'TRX': { bg: 'bg-red-500', text: 'T' }
    };
    const config = iconConfig[symbol as keyof typeof iconConfig] || { bg: 'bg-gray-500', text: symbol.charAt(0) };
    return (
      <div className={`hidden w-8 h-8 rounded-full ${config.bg} flex items-center justify-center text-white text-sm font-bold`}>
        {config.text}
      </div>
    );
  };

  return (
    <div className="pt-24 p-6">
      <Card className="bg-card border-border animate-in fade-in slide-in-from-bottom-6 duration-700">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Live Market</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search coins..."
                className="pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {/* Header Row */}
            <div className="grid grid-cols-6 gap-4 px-6 py-3 text-sm text-muted-foreground border-b border-border">
              <div>Coin</div>
              <div className="text-right">Change</div>
              <div className="text-right">Market Cap</div>
              <div className="text-right">24h Volume</div>
              <div className="text-right">Price</div>
              <div></div>
            </div>
            
            {/* Data Rows */}
            {filteredData.map((crypto, index) => (
              <Link 
                key={crypto.id} 
                href={`/dashboard/coin/${crypto.id}`} 
                className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-muted/50 transition-all duration-300 border-b border-border last:border-b-0 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${(index % 20) * 50}ms`,
                  animationDuration: '500ms',
                  animationFillMode: 'both'
                }}
              >
                {/* Coin */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    {getCryptoIcon(crypto.symbol)}
                    {getFallbackIcon(crypto.symbol)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{crypto.name}</div>
                    <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                  </div>
                </div>
                
                {/* Change */}
                <div className="text-right flex items-center justify-end">
                  <span className={`text-sm font-medium ${
                    crypto.quote.USD.percent_change_24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {crypto.quote.USD.percent_change_24h >= 0 ? '+' : ''}
                    {crypto.quote.USD.percent_change_24h.toFixed(2)}%
                  </span>
                </div>
                
                {/* Market Cap */}
                <div className="text-right flex items-center justify-end">
                  <span className="text-sm font-medium text-foreground">
                    {formatUSD(crypto.quote.USD.market_cap)}
                  </span>
                </div>
                
                {/* Volume */}
                <div className="text-right flex items-center justify-end">
                  <span className="text-sm font-medium text-foreground">
                    {formatUSD(crypto.quote.USD.volume_24h)}
                  </span>
                </div>
                
                {/* Price */}
                <div className="text-right flex items-center justify-end">
                  <span className="text-sm font-bold text-foreground">
                    ${crypto.quote.USD.price.toLocaleString('en-US', { 
                      minimumFractionDigits: 2, 
                      maximumFractionDigits: 2 
                    })}
                  </span>
                </div>
                
                {/* Menu */}
                <div className="flex items-center justify-end">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="1" fill="currentColor"/>
                      <circle cx="12" cy="5" r="1" fill="currentColor"/>
                      <circle cx="12" cy="19" r="1" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </Link>
            ))}
            
            {/* Load More Button */}
            {hasMore && !searchTerm && (
              <div className="px-6 py-6 text-center border-t border-border">
                <Button 
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  variant="outline"
                  className="min-w-32"
                >
                  {loadingMore ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </Button>
              </div>
            )}
            
            {/* No Results */}
            {searchTerm && filteredData.length === 0 && (
              <div className="px-6 py-8 text-center">
                <p className="text-muted-foreground">No coins found matching "{searchTerm}"</p>
              </div>
            )}
            

          </div>
        </CardContent>
      </Card>
    </div>
  );
}