import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: process.env.API_KEY ?? "18f1be6a46a1480ebb89a87f93cd6a72",
    });
  }
}

export default AppLoader;
