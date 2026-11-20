
function Sidebar({ activeView, setActiveView }) {
  return (
    <aside className="w-56 min-h-screen bg-gray-50 p-4 border-r">
      <nav className="flex flex-col gap-3">

        <button
          onClick={() => setActiveView('notes')}
          className={`text-left p-3 rounded-lg ${
            activeView === 'notes'
              ? 'bg-yellow-100 font-medium'
              : 'hover:bg-gray-200'
          }`}
        >
          📝 Notes
        </button>

        <button
          onClick={() => setActiveView('pinned')}
          className={`text-left p-3 rounded-lg ${
            activeView === 'pinned'
              ? 'bg-yellow-100 font-medium'
              : 'hover:bg-gray-200'
          }`}
        >
          📌 Pinned
        </button>

        <button
          onClick={() => setActiveView('archive')}
          className={`text-left p-3 rounded-lg ${
            activeView === 'archive'
              ? 'bg-yellow-100 font-medium'
              : 'hover:bg-gray-200'
          }`}
        >
          📦 Archive
        </button>

      </nav>
    </aside>
  )
}

export default Sidebar
