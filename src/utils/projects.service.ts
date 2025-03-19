import { Project } from "@/types/sidebar.types";

class ProjectsService {
  private URL = import.meta.env.VITE_APP_URL;
  
  async getProjects() : Promise<Project[]> {
    const response = await fetch(`${this.URL}/project`, {
        method: 'GET',
        credentials: 'include'
    })
    return response.json();
  }

  async createProject(newProject : {name : string}) {
    await fetch(`${this.URL}/project`, {
        method: 'POST',
        body: JSON.stringify(newProject),
        credentials: 'include',
    });
  }

  async deleteProject(projectId : number) {
    await fetch(`${this.URL}/project/${projectId}`, {
        method: 'DELETE',
        credentials: 'include',
    });
  }

  async getProjectById() {

  }
}

export const projects = new ProjectsService();