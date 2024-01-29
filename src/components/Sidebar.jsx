import Button from "./Button"

export default function Sidebar({onStartAddProject, projects,onProjectSelect, SelectedProjectId }){
 
    return(
        <aside className="w-1/3 px-8 py-16 bg-blue-500 text-stone-50 md:w-72 roundrd-r-xl">
       <h2 className="text-xl font-bold text-stone-700 my-4">My project</h2>
       <Button onClick={onStartAddProject}>
        + Add project</Button> 
        <ul>
            {projects.map((project)=>{
let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
if(project.id === SelectedProjectId){
cssClasses += ' bg-stone-800 text-stone-200' 
}
else{
    cssClasses += 'text-stone-400' 
}
                return (
                        <li key={project.id}>
                    <button className={cssClasses}
                    onClick={()=> onProjectSelect(project.id)}>
                        {project.title}
                        </button>
                </li>
                )
            }
           
            )}
        </ul>

        </aside>
    )
}