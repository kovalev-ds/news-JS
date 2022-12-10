import './sources.css';

import { Source } from "../../../types"
import { querySelector } from "../../../utils"
import { iView } from '../../contracts/iView';

class Sources implements iView<Source> {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            querySelector(sourceClone, '.source__item-name').textContent = item.name;
            querySelector(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        querySelector(document, '.sources').append(fragment);
    }
}

export default Sources;
