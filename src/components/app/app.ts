import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { querySelector } from "../../utils"

class App {
    private controller: AppController;
    private view: AppView

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        querySelector(document, '.sources')
            .addEventListener('click', 
                (e) => this.controller.getNews(e, 
                    (data) => this.view.drawNews(data)));
        
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
