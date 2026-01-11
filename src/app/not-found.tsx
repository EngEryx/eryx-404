import SnakeGame from '@/components/SnakeGame';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-300 mb-2">Page not found</p>
        <p className="text-gray-500 mb-6">
          But hey, while you&apos;re here... why not play some Snake?
        </p>
      </div>

      <SnakeGame />

      <div className="mt-8">
        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
        >
          ← Back to Home
        </Link>
      </div>

      <footer className="absolute bottom-4 text-center">
        <p className="text-gray-600 text-sm">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            Eryx Labs
          </span>
        </p>
      </footer>
    </div>
  );
}
