export function StudentTopbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Welcome back, Student
        </h2>
        <p className="text-sm text-gray-500">
          Ready to learn? Ask me anything.
        </p>
      </div>

      {/* Placeholder for profile menu */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  )
}
