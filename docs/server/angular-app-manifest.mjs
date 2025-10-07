
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/fithouse-training-web',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/fithouse-training-web"
  },
  {
    "renderMode": 2,
    "route": "/fithouse-training-web/auth"
  },
  {
    "renderMode": 2,
    "route": "/fithouse-training-web/treino"
  },
  {
    "renderMode": 2,
    "route": "/fithouse-training-web/inicio"
  },
  {
    "renderMode": 2,
    "route": "/fithouse-training-web/categorias"
  },
  {
    "renderMode": 2,
    "route": "/fithouse-training-web/exercicios"
  },
  {
    "renderMode": 2,
    "redirectTo": "/fithouse-training-web",
    "route": "/fithouse-training-web/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7640, hash: '34e37dc368eaa03f3225594748c5de9f190978da6374a9aa9930671169b60905', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1030, hash: '2e0747e53425faec8e53466af2df58ab1ba1ae0ea77faa0464571f129df7cbb9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 19145, hash: '2556ec7f94cf812a9ab9caea0810dc8f62ab6b2206395ce08e6a92e14a0231c6', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 56235, hash: '839a580ccae57f6d4a219d544201bcb38132334cd015a99af7758669a9b48d18', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'categorias/index.html': {size: 56235, hash: '839a580ccae57f6d4a219d544201bcb38132334cd015a99af7758669a9b48d18', text: () => import('./assets-chunks/categorias_index_html.mjs').then(m => m.default)},
    'index.html': {size: 56235, hash: '839a580ccae57f6d4a219d544201bcb38132334cd015a99af7758669a9b48d18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'treino/index.html': {size: 56235, hash: '839a580ccae57f6d4a219d544201bcb38132334cd015a99af7758669a9b48d18', text: () => import('./assets-chunks/treino_index_html.mjs').then(m => m.default)},
    'exercicios/index.html': {size: 56235, hash: '839a580ccae57f6d4a219d544201bcb38132334cd015a99af7758669a9b48d18', text: () => import('./assets-chunks/exercicios_index_html.mjs').then(m => m.default)},
    'styles-IHLKP4M2.css': {size: 150573, hash: '2Nzpncx9N4A', text: () => import('./assets-chunks/styles-IHLKP4M2_css.mjs').then(m => m.default)}
  },
};
