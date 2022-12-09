import './news.css';

import {Article} from "../../../types"
import {querySelector} from "../../../utils"

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            
            if (idx % 2 > 0) { 
                querySelector<HTMLElement>(newsClone, '.news__item').classList.add('alt');
            }

            querySelector<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                    item.urlToImage ?? 'img/news_placeholder.jpg'
            })`;


            querySelector<HTMLElement>(newsClone, '.news__meta-author').textContent = item.author ?? item.source.name;

            querySelector<HTMLElement>(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            querySelector<HTMLElement>(newsClone, '.news__description-title').textContent = item.title;
            querySelector<HTMLElement>(newsClone, '.news__description-source').textContent = item.source.name;
            querySelector<HTMLElement>(newsClone, '.news__description-content').textContent = item.description;
            querySelector<HTMLAnchorElement>(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        querySelector<HTMLElement>(document, '.news').innerHTML = '';
        querySelector<HTMLElement>(document, '.news').appendChild(fragment);
    }
}

export default News;
