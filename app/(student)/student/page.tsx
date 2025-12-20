import Link from 'next/link'

export default function StudentPage() {
  return (
    <div className="min-h-screen bg-surface-bg">
      <header className="bg-card border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">EduRescue Student</h1>
          <Link href="/" className="text-sm text-text-secondary hover:text-primary">
            Home
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Welcome to Student Portal
          </h2>
          <p className="text-text-secondary mb-4">
            Get instant AI-powered help for your academic questions. Escalate to human experts when needed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              AI Assistant
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Get instant answers to your questions with our AI assistant
            </p>
            <button className="text-primary hover:underline text-sm font-medium">
              Start Chat →
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-3">🚨</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Emergency Help
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Need urgent expert verification? Create an emergency ticket
            </p>
            <button className="text-emergency-red hover:underline text-sm font-medium">
              Get Help →
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Saved Notes
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Access your verified answers and study materials
            </p>
            <button className="text-primary hover:underline text-sm font-medium">
              View Notes →
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Resources
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Curated study materials and exam prep resources
            </p>
            <button className="text-primary hover:underline text-sm font-medium">
              Browse →
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Dashboard
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Track your progress and study analytics
            </p>
            <button className="text-primary hover:underline text-sm font-medium">
              View Stats →
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Settings
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Manage your account and preferences
            </p>
            <button className="text-primary hover:underline text-sm font-medium">
              Configure →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
