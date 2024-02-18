import { storage } from "../components/storage";
import { format } from "date-fns";

export function addProject(project){
  const newProject = [];
  const keyData = `${project}_${format(new Date(), 'yyyyMMdd')}`;
  const stringData = JSON.stringify(newProject);
  
  storage.setItem(keyData, stringData);
  const retrievedData = storage.getItem(keyData);
  console.log(`New project store: ${Array.isArray(JSON.parse(retrievedData))}`);
}