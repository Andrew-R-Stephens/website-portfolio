
export class Project {

    title:string = "";
    altTitle:string = "";
    genre:string = "";
    isPublication:boolean = false;
    details:string = "";
    tech:string[] = [];
    images:any[] = [];
    githubUrl:string = "";
    demoUrl:string = "";

    constructor(data:any) {
        this.title = data.title;
        this.altTitle = data.altTitle;
        this.genre = data.genre;
        this.isPublication = data.publication;
        this.details = data.details;
        this.tech = data.tech;
        this.images = data.images;
        this.githubUrl = data.githubUrl;
        this.demoUrl = data.demoUrl;
    }
}
