import * as Dialog from '@radix-ui/react-dialog';
import { formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, useState } from "react";
import { X } from 'lucide-react';
import { toast } from 'sonner'

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void;
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
    const [content, setContent] = useState("");
    
    function handleStartEditor() {
        setShouldShowOnboarding(false)
    }

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
        if (event.target.value === "") {
            setShouldShowOnboarding(true);
        } 
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault();
        onNoteCreated(content);
        setContent("")
        setShouldShowOnboarding(true)

        toast.success('Note created successfully.');
    }

    return (
        <Dialog.Root>
        <Dialog.Trigger className='rounded-md flex flex-col bg-slate-700 p-5 gap-3 text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
          <span className="text-sm  font-medium text-slate-200">Create a note</span>
          <p className='text-sm leading-6 text-slate-400'>Record an audio note and it will be automatically converted to text.</p>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/50"/>
            <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                    

                    <X className="size-5" />
                </Dialog.Close>
                    <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className="text-sm  font-medium text-slate-200">
                                Create a note
                            </span>
                            {shouldShowOnboarding ? (
                            <p className='text-sm leading-6 text-slate-400'>
                            Start by <button className='text-lime-400 hover:underline'>recording</button> an audio note or, if you prefer, use <button className='text-lime-400 hover:underline' onClick={handleStartEditor}>text</button> only.
                            </p>
                            ) : (
                                <textarea
                                autoFocus
                                className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'                
                                onChange={handleContentChange}
                                value={content}
                                >
                                </textarea>
                            )}
                        </div>

                            <button 
                            type="submit"
                            className='w-full bg-lime-400 text-lime-950 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:bg-lime-500'
                            >
                            Save note
                            </button>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>
    )
}