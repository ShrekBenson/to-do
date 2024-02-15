class task{
  #title;
  #description;
  #dueDate;
  #priority;

  constructor(title, description, dueDate, priority){
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority
  }

  toJSON(){
    return {      
      title: this.#title,
      description: this.#description,
      dueDate: this.#dueDate,
      priority: this.#priority
    }
  }
}
class taskProject extends task{
  #project;

  constructor(title, description, dueDate, priority, project){
    super(title, description, dueDate, priority);
    this.#project = project;
  }

  toJSON(){
    return {      
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      project: this.#project
    }
  }
}

export {task, taskProject}