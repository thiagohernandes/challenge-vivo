export class UtilApp {

    constructor() {}

    public mountSearch(search: string): string {
        return search.replace(' ', '+');
    }

    public globalNavigateSettings(event) {
        switch (event.keyCode) {
            case 37:
            alert('Left Key pressed!');
            break;
            case 38:
            alert('Up Key pressed!');
            break;
            case 39:
            alert('Right Key pressed!');
            break;
            case 40:
            alert('Down Key pressed!');
            break;
        }
      }

}
