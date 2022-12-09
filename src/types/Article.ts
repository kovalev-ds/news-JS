export type Article = {
    author?: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage?: string;
    source: {id: string, name: string};
}