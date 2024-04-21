import { BackendModule, ReadCallback } from 'i18next';

const Backend: BackendModule = {
  type: 'backend',
  init() {
    /* nothing to do here */
  },
  read(language: string, namespace: string, callback: ReadCallback) {
    const path = namespace
      .split('_').join('/');

    import(`/src/app/${path}/content/${language}/index.json`)
      .then((resources) => callback(null, resources))
      .catch((error) => callback(error, null));
  },
};

export default Backend;
