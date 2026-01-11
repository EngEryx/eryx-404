import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
          Eryx Labs
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md">
          Building the future, one experiment at a time.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/404-demo"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            Try the 404 Game
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-4 text-center">
        <p className="text-gray-600 text-sm">
          © 2024{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            Eryx Labs
          </span>
        </p>
      </footer>
    </div>
  );
}
