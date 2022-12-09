import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:any) {
        const values = data?.articles !== null ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:any) {
        const values = data.sources !== null ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
