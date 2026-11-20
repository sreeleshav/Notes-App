import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Notelist from './Components/NoteList'
import NoteForm from './Components/NoteForm'
import { useState } from 'react'
import './App.css'

function App() {


  const [activeView, setActiveView] = useState('notes')
  const [editNotes, setEditingNote] = useState(null)

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Learning React',
      content: 'Today I learned about components and props.',
      color: "bg-yellow-100",
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      pinned: false,
      archived: false
    },
    {
      id: 2,
      title: 'JavaScript',
      content: 'Practice arrays, objects and map method.',
      color: "bg-blue-100",
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      pinned: false,
      archived: false
    },
    {
      id: 3,
      title: 'My Goals',
      content: 'Complete my Notes App project.',
      color: "bg-green-100",
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      pinned: false,
      archived: false
    }
  ])
  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    )
  }

  const filteredNotes = notes.filter((note) => {
    if (activeView === "pinned") {
      return note.pinned && !note.archived
    }
    if (activeView === "archive") {
      return note.archived
    }

    return !note.archived
  })


  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, archived: !note.archived }
          : note
      )
    )
  }

  const handleEditNote = (id) => {
    const selectedNote = notes.find((note) => note.id === id)

    setEditingNote(selectedNote)
  }

  const updateNote = ({ id, title, content }) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id
          ? {
            ...note,
            title: title.trim(),
            content: content.trim(),
            updatedAt: new Date().toLocaleDateString()
          }
          : note
      )
    )

    setEditingNote(null)
  }

  const addNote = ({ title, content }) => {
    const newNote = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      color: 'bg-yellow-100',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      pinned: false,
      archived: false
    }

    setNotes((currentNotes) => [newNote, ...currentNotes])
  }
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <div className="flex">
        <SideBar
          activeView={activeView}
          setActiveView={setActiveView}
        />

        <main className="flex-1 p-6">

          <h2 className="text-2xl font-semibold mb-5">
            {activeView === 'pinned'
              ? 'Pinned Notes'
              : activeView === 'archive'
                ? 'Archived Notes'
                : 'My Notes'}
          </h2>

          <NoteForm onAddNote={addNote}
            editNotes={editNotes}
            onUpdateNote={updateNote} />


          <Notelist
            notes={filteredNotes}
            togglePin={togglePin}
            toggleArchive={toggleArchive}
            onEdit={handleEditNote}
            onDelete={deleteNote}
          />

        </main>
      </div>

    </div>
  )
}

export default App
