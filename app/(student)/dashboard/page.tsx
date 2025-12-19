export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Stats</h3>
          <p className="text-gray-600 text-sm">Overview coming soon...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Recent Activity</h3>
          <p className="text-gray-600 text-sm">Activity log coming soon...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Access</h3>
          <p className="text-gray-600 text-sm">Shortcuts coming soon...</p>
        </div>
      </div>
    </div>
  );
}
