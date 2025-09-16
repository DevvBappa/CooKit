import Link from 'next/link';
import Header from '@/components/Header';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Cook Amazing Meals with{' '}
            <span className="relative whitespace-nowrap text-orange-500">
              <span className="relative">CooKit</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover thousands of delicious recipes, plan your meals, and become the chef you've always wanted to be. 
            Join our community of food lovers today!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/login" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
