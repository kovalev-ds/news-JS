import { Article } from "./Article";
import { Source } from './Source';

type SourcesData = {
    status: string;
    sources?: Source[];
}

type ArticlesData = {
    status: string;
    totalResults: number;
    articles?: Article[];
}

export { Article, Source, SourcesData, ArticlesData }