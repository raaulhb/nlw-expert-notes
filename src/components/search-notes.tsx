import logo from '../assets/logo-nlw-expert.svg'

export function SearchNotes() {
    return (
       <>
        <img src={logo} alt="logo" />
      <form className="w-full">
        <input 
          type="NLW expert" 
          placeholder='Search notes...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>
      <div className="h-px bg-slate-700" />
      </>
    )
}