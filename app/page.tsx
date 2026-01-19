import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br form-purple-50 to purple-100 flex
    items-center justify-center">
      <div className="px-4 container mx-auto py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inventory Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Steamlin your inventory tracking with our powerful, easy-to-use Management system. Track products, monitor
            stock levels, and gain valuable insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-in"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold
             transition-colors hover:bg-purple-700">
              Sign In
            </Link>
            <Link href="#"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold
             transition-colors hover:bg-purple-50 border border-purple-600">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
