export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Login to EduRescue
        </h1>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email or Phone
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or phone"
              className="w-full px-4 py-2 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-brand-blue-dark transition font-medium"
          >
            Login
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <a href="/" className="text-sm text-text-secondary hover:text-primary">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
