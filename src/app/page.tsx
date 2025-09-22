import Link from 'next/link';
import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header showNavigation={false} minimal={true} />
      <ThemeToggle />
      
      {/* Hero Section - Large and Centered */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Headline */}
          <AnimatedSection direction="up" delay={200}>
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white tracking-tight">
                Cook
                <span className="block font-semibold text-orange-500">Better</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Discover curated recipes and plan your meals with our simple, intuitive cooking companion.
              </p>
            </div>
          </AnimatedSection>

          {/* Single Primary CTA */}
          <AnimatedSection direction="up" delay={400}>
            <div className="pt-8">
              <Link href="/register">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-12 py-4 text-lg font-medium rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Cooking Today
                </Button>
              </Link>
              
              {/* Secondary Action - Minimal */}
              <div className="mt-8">
                <Link 
                  href="/login" 
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium transition-colors"
                >
                  Already have an account? Sign in
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </main>

      {/* Recipe Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection direction="up" delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
                Explore Recipe Categories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
                Discover thousands of carefully curated recipes organized by cuisine, meal type, and dietary preferences
              </p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-24">
            {/* Breakfast - Image Left */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <AnimatedSection direction="up" delay={50} className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500">🥞</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={100} className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">Breakfast</h3>
                <p className="text-lg text-black dark:text-white font-light mb-6 leading-relaxed">
                  Start your day right with our collection of energizing breakfast recipes. From quick weekday options to leisurely weekend brunches, discover pancakes, eggs, smoothies, and healthy morning meals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                  <span className="text-orange-500 font-medium">120+ recipes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">5-30 min prep time</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Lunch - Image Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <AnimatedSection direction="up" delay={150} className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500">🥗</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={200} className="lg:w-1/2 text-center lg:text-right">
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">Lunch</h3>
                <p className="text-lg text-black dark:text-white font-light mb-6 leading-relaxed">
                  Power through your day with satisfying lunch recipes. Fresh salads, hearty sandwiches, soups, and light meals that give you energy without weighing you down.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-end lg:justify-end">
                  <span className="text-orange-500 font-medium">200+ recipes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">15-45 min prep time</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Dinner - Image Left */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <AnimatedSection direction="up" delay={250} className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500">🍝</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={300} className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">Dinner</h3>
                <p className="text-lg text-black dark:text-white font-light mb-6 leading-relaxed">
                  End your day with delicious dinner recipes that bring family and friends together. From comfort food classics to international cuisines and elegant dishes for special occasions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                  <span className="text-orange-500 font-medium">350+ recipes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">20-90 min prep time</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Desserts - Image Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <AnimatedSection direction="up" delay={350} className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500">🍰</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={400} className="lg:w-1/2 text-center lg:text-right">
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">Desserts</h3>
                <p className="text-lg text-black dark:text-white font-light mb-6 leading-relaxed">
                  Indulge in sweet treats and decadent desserts. From simple cookies to elaborate cakes, discover recipes that will satisfy any sweet tooth and impress your guests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-end lg:justify-end">
                  <span className="text-orange-500 font-medium">180+ recipes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">15-120 min prep time</span>
                </div>
              </AnimatedSection>
            </div>

            {/* International - Image Left */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <AnimatedSection direction="up" delay={450} className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500">🌍</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={500} className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">International</h3>
                <p className="text-lg text-black dark:text-white font-light mb-6 leading-relaxed">
                  Explore flavors from around the world. Authentic recipes from Italian pasta to Asian stir-fries, Mexican tacos to French pastries. Bring global cuisine to your kitchen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                  <span className="text-orange-500 font-medium">400+ recipes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">25-150 min prep time</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Healthy - Image Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <AnimatedSection direction="up" delay={550} className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500">🥑</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={600} className="lg:w-1/2 text-center lg:text-right">
                <h3 className="text-3xl font-light text-black dark:text-white mb-4">Healthy</h3>
                <p className="text-lg text-black dark:text-white font-light mb-6 leading-relaxed">
                  Nourish your body with nutritious and delicious healthy recipes. Low-calorie options, superfoods, meal prep ideas, and balanced meals that support your wellness goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-end lg:justify-end">
                  <span className="text-orange-500 font-medium">250+ recipes</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">10-60 min prep time</span>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Call to Action */}
          <AnimatedSection direction="up" delay={100}>
            <div className="text-center mt-20">
              <Link href="/register">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-12 py-4 text-lg font-medium rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore All Categories
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
                Featured Recipes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
                Popular recipes loved by our community
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recipe Card 1 */}
            <AnimatedSection direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-200 dark:to-orange-300 flex items-center justify-center">
                  <span className="text-6xl">🍳</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Perfect Scrambled Eggs</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Creamy, fluffy eggs that melt in your mouth</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>⏱️ 10 mins</span>
                    <span>👤 Easy</span>
                    <span>⭐ 4.8</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Recipe Card 2 */}
            <AnimatedSection direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-200 dark:to-green-300 flex items-center justify-center">
                  <span className="text-6xl">🥗</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Mediterranean Salad</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Fresh, healthy, and bursting with flavor</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>⏱️ 15 mins</span>
                    <span>👤 Easy</span>
                    <span>⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Recipe Card 3 */}
            <AnimatedSection direction="up" delay={400}>
              <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-200 dark:to-red-300 flex items-center justify-center">
                  <span className="text-6xl">🍝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Creamy Pasta Carbonara</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Classic Italian comfort food at its finest</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>⏱️ 25 mins</span>
                    <span>👤 Medium</span>
                    <span>⭐ 4.7</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* View More CTA */}
          <AnimatedSection direction="up" delay={500}>
            <div className="text-center mt-12">
              <Link href="/register">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Access to All Recipes
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Simple Feature Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection direction="up" delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
                Everything you need
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
                Simple tools for better cooking experiences
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-16">
            <AnimatedSection direction="up" delay={200}>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Curated Recipes</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Handpicked recipes from professional chefs and home cooking enthusiasts.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={300}>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Meal Planning</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Organize your weekly meals and generate smart shopping lists automatically.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={400}>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Smart Timers</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Built-in cooking timers and step-by-step guidance for perfect results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center px-6 space-y-8">
          <AnimatedSection direction="up" delay={200}>
            <h2 className="text-4xl font-light text-gray-900 dark:text-white">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
              Join thousands of home cooks improving their kitchen skills.
            </p>
            <Link href="/register">
              <Button 
                variant="primary" 
                size="lg" 
                className="px-12 py-4 text-lg font-medium rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Free
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-2xl font-semibold text-orange-500 mb-4">🍳 CooKit</div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 CooKit. Made with ❤️ for home cooks everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
