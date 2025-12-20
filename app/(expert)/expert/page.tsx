import Link from 'next/link'

export default function ExpertPage() {
  return (
    <div className="min-h-screen bg-surface-bg">
      <header className="bg-card border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">EduRescue Expert</h1>
          <Link href="/" className="text-sm text-text-secondary hover:text-primary">
            Home
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Expert Dashboard
          </h2>
          <p className="text-text-secondary mb-4">
            Review and verify AI-generated answers for students&apos; critical questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card rounded-lg shadow-md p-6">
            <div className="text-sm text-text-secondary mb-1">Pending</div>
            <div className="text-3xl font-bold text-warning-yellow">12</div>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <div className="text-sm text-text-secondary mb-1">In Progress</div>
            <div className="text-3xl font-bold text-primary">5</div>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <div className="text-sm text-text-secondary mb-1">Completed Today</div>
            <div className="text-3xl font-bold text-success-green">23</div>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <div className="text-sm text-text-secondary mb-1">Emergency</div>
            <div className="text-3xl font-bold text-emergency-red">3</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              📬 Ticket Inbox
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Review pending student questions and provide expert verification
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-brand-blue-dark transition font-medium">
              Open Inbox
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              ⚡ Priority Queue
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Handle emergency tickets with exam-critical questions
            </p>
            <button className="bg-emergency-red text-white py-2 px-4 rounded-md hover:opacity-90 transition font-medium">
              View Emergencies
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              📊 Analytics
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Track your verification accuracy and response times
            </p>
            <button className="text-primary hover:underline text-sm font-medium">
              View Stats →
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              ⚙️ Settings
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Manage your expert profile and notification preferences
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
