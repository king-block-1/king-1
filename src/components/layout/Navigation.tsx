import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background border-b border-black/[.08] dark:border-white/[.145] h-16 flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          King
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/explore" 
            className="text-sm hover:text-primary transition-colors"
          >
            Explore
          </Link>
          <Link 
            href="/creators" 
            className="text-sm hover:text-primary transition-colors"
          >
            Creators
          </Link>
          <button 
            className="rounded-full bg-primary text-white px-4 py-2 text-sm hover:bg-primary/90 transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}; 