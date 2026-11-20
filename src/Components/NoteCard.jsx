
function NoteCard({
  id,
  title,
  content,
  color,
  createdAt,
  updatedAt,
  pinned,
  archived,
  togglePin,
  toggleArchive,
  onEdit,
  onDelete
}) {
  return (
    <div className={`${color} p-4 rounded-xl shadow-sm border`}>

      <div className="flex justify-between items-center">

        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <div className="flex gap-2 items-center">


          <button
            onClick={() => onEdit(id)}
            className="bg-blue-100 px-3 py-1 rounded-md text-sm"
          >
            Edit
          </button>

          <button
            onClick={() => togglePin(id)}
            className="bg-white border px-3 py-1 rounded-md text-sm"
          >
            {pinned ? 'Unpin' : 'Pin'}
          </button>

          <button
            onClick={() => toggleArchive(id)}
            className="bg-orange-100 border border-orange-300 px-3 py-1 rounded-md text-sm"
          >
            {archived ? 'Unarchive' : 'Archive'}
          </button>

          <button onClick={() => onDelete(id)} className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm border border-red-300">
            Delete
          </button>



        </div>
      </div>

      <p className="text-gray-600 mt-2">
        {content}
      </p>

      <div className="mt-4 text-xs text-gray-500">
        <p>Created: {createdAt}</p>
        <p>Updated: {updatedAt}</p>
      </div>

    </div>
  )
}

export default NoteCard
