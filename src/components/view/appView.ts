import News from './news/news';
import Sources from './sources/sources';

import { Article, ArticlesData, Source, SourcesData } from "../../types";
import { iView } from '../contracts/iView';

export class AppView {
    private news: iView<Article>;
    private sources: iView<Source>;
    
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
