import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },     // Landing (SSG)
  { path: 'auth', renderMode: RenderMode.Client },    // login: client-side (ou Server se preferir)
  { path: 'treino', renderMode: RenderMode.Client },  // por enquanto client (mudar p/ Server se precisar ler cookie)
  { path: 'inicio', renderMode: RenderMode.Client },
  { path: 'categorias', renderMode: RenderMode.Client },
  { path: 'exercicios', renderMode: RenderMode.Client },
  // fallback — caso queira prerender tudo o resto:
  { path: '**', renderMode: RenderMode.Prerender }
];