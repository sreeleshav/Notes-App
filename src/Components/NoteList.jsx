
import NoteCard from './Notecard'

function Notelist({ notes, togglePin, toggleArchive, onEdit,onDelete }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    color={note.color}
                    createdAt={note.createdAt}
                    updatedAt={note.updatedAt}
                    pinned={note.pinned}
                    archived={note.archived}
                    togglePin={togglePin}
                    toggleArchive={toggleArchive}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}

        </div>
    )
}

export default Notelist
