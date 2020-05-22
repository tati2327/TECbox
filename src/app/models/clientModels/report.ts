export class Report {
    id: number;
    name: string;
    description: string;
    log: string;

    constructor(id, name, description = '', log){
      this.id = id;
      this.name = name;
      this.description = description;
      this.log = log;
    }
  }

