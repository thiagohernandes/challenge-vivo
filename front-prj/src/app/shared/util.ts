export class UtilApp {

    constructor() {}

    public mountSearch(search: string): string {
        return search.replace(' ', '+');
    }

}
