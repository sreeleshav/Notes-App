import React from 'react'

function Header() {
  return (
    <>
     <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">
        My Notes
      </h1>

      {/* <input
        type="text"
        placeholder="Search your notes..."
        className="border rounded-lg px-4 py-2 w-64"
      /> */}
    </header>
    </>
  )
}

export default Header