

const app = document.getElementById('app')!;
const singleProject = document.querySelector('single-project')!;
const projectInput = document.getElementById('project-input')!;

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    element: HTMLFormElement;

    constructor(){
        this.templateElement = projectInput as HTMLTemplateElement;
        this.hostElement = app as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput();