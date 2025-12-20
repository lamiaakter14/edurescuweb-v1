import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">
          Welcome to EduRescue v1
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          24/7 Academic Emergency Platform for Bangladeshi Students
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link 
            href="/login"
            className="p-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center"
          >
            <h2 className="text-xl font-semibold mb-2">Login</h2>
            <p className="text-sm opacity-90">Access your account</p>
          </Link>
          
          <Link 
            href="/student"
            className="p-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center"
          >
            <h2 className="text-xl font-semibold mb-2">Student Portal</h2>
            <p className="text-sm opacity-90">Get instant AI help</p>
          </Link>
          
          <Link 
            href="/expert"
            className="p-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-center"
          >
            <h2 className="text-xl font-semibold mb-2">Expert Portal</h2>
            <p className="text-sm opacity-90">Review student tickets</p>
          </Link>
        </div>
        
        <div className="text-center text-gray-600">
          <p className="text-sm">
            AI Assistant (default) + Emergency Help (escalation)
          </p>
          <p className="text-sm">
            Mobile-first • Bangla-first • Built for Bangladesh
          </p>
        </div>
      </div>
    </div>
  )
}
