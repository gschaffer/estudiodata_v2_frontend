import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // sube al inicio al navegar
        anchorScrolling: 'enabled', // (opcional) soporta #anclas
        // scrollOffset: [0, 64],             // (no funciona en standalone v19):contentReference[oaicite:2]{index=2}
      })
    ),
    provideClientHydration(withEventReplay()),
  ],
};
