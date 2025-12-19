export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">EduRescue v1</h1>
        <p className="text-gray-600 mb-8">24/7 Academic Emergency Platform</p>
        <div className="flex gap-4 justify-center">
          <a
            href="/student/assistant"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Student Portal
          </a>
          <a
            href="/expert/inbox"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Expert Portal
          </a>
        </div>
      </div>
    </div>
  );
}
