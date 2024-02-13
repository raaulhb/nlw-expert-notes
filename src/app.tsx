import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import { SearchNotes } from './components/search-notes'

const note = {
  date: new Date(),
  content: "hsuahsuahsuah"
}

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <SearchNotes/>

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard />
        <NoteCard note={note}/>
               
      </div>

    </div>
  )
}

