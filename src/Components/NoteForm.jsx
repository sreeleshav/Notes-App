
import { useState, useEffect } from 'react'

function NoteForm({ onAddNote, editNotes, onUpdateNote }) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (editNotes) {
      setTitle(editNotes.title)
      setContent(editNotes.content)
    }
  }, [editNotes])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!content.trim()) {
      alert('Please enter note content')
      return
    }

    if (editNotes) {
      onUpdateNote({
        id: editNotes.id,
        title,
        content
      })
    } else {
      onAddNote({ title, content })
    }

    setTitle('')
    setContent('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-xl shadow-sm mb-5"
    >
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded-lg mb-3"
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded-lg"
        rows="4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3"
      >
        {editNotes ? 'Save Changes' : 'Add Note'}
      </button>
    </form>
  )
}

export default NoteForm
