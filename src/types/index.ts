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

type RequestOptionsBase = {
    apiKey: string;
}

type RequestOptions = object;

type Request = {
    endpoint: string, options?: RequestOptions
}

type RequestMethod = 'GET' |'POST' | 'DELETE' | 'PUT' | "PATCH";



export { 
    Article, 
    Source, 
    SourcesData, 
    ArticlesData, 
    Request, 
    RequestOptions,
    RequestOptionsBase, 
    RequestMethod 
}