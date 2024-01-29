import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import EmptyProject from "./components/emptyProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]

  });
function handleAddTask(text){
  setProjectState(prevState => {
    const newTask = {
     text: text,
     projectId: prevState.selectedProjectId,
      id: Math.random()
    };
    return {
      ...prevState,
      tasks: [...prevState.tasks, newTask]
    }
  })
}
function handleDeleteTask(id){
  setProjectState(prevState => {
    return {
      ...prevState,
           tasks: prevState.tasks.filter(
        (task) => task.id !== id),
    }
  })
}

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    })
  }

  function handleCancel() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  function handleSelectedProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }
  function handleDelete() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id == projectState.selectedProjectId)
  let content = 
  (<SelectedProject project={selectedProject} 
  deleteProject={handleDelete} 
  onAddTask={handleAddTask}
  onDeleteTask = {handleDeleteTask} 
  tasks = {projectState.tasks}/>
  );
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} handleCancel={handleCancel} />

  }
  else if (projectState.selectedProjectId === undefined) {
    content = <EmptyProject onStartAddProject={handleStartProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartProject}
        projects={projectState.projects}
        onProjectSelect={handleSelectedProject}
        selectedProjectId = {projectState.selectedProjectId}
      />
      {content}
      {/* {projectState ? <NewProject /> : ''} */}
    </main>
  );
}

export default App;
