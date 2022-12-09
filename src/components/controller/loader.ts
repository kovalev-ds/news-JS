type Options = {
    apiKey: string;
}

type RequestOptions = object;

type Request = {
    endpoint: string, options?: RequestOptions
}

type RequestMethod = 'GET' |'POST' | 'DELETE' | 'PUT' | "PATCH";


class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>({ endpoint, options } : Request, callback: (data:T) => void) {
        this.load<T>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (res.ok === false) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: RequestOptions, endpoint: string) : string {
        const urlOptions: Options & RequestOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: RequestMethod, endpoint: string, callback:(data: T) => void, options: RequestOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => { callback(data) })
            .catch((err) => console.error(err));
    }
}

export default Loader;
