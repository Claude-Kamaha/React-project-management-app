import Input from './Input';
import { useRef } from 'react';
import Modal from "./Modal";
import Button from './Button';
export default function NewProject({onAdd, handleCancel}){
    const modal = useRef()
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
const enteredTitle = title.current.value;
const enteredDescription = description.current.value;
const enteredDueDate = dueDate.current.value;
console.log(enteredTitle,enteredDescription);

if(
    enteredTitle.trim()=== '' ||
    enteredDescription.trim()=== '' ||
    enteredDueDate.trim()=== '' 
){
modal.current.open();
return ;
}

onAdd({
    title: enteredTitle,
    description: enteredDescription,
    dueDate: enteredDueDate
})
    }
    return(
        <>
        <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Ooops Something went wrong</p>
            <p className="text-stone-600 mb-4">Please provide valid value</p>
           
        </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={handleCancel} >cancel</button></li>
            <li><button className='bg-stone-800 text-stone-50 hover:bg-stone-950'
            onClick={handleSave}>save</button></li>
        </menu>
        <div>
            <Input ref= {title} label="Title"/>
            <Input ref= {description} label="DESCRIPTION" isTextArea/>
            <Input ref={dueDate} type="date" label="Due date"/>
        </div>
    </div>
    </>
    )
}