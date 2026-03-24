import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import * as Sentry from "@sentry/vue";
import router from './router'
import { createSentryPiniaPlugin } from "@sentry/vue";

const app = createApp(App)
const pinia = createPinia()
pinia.use(createSentryPiniaPlugin());

const sentryInit = Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: false,
  integrations: [
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration(),
    Sentry.consoleLoggingIntegration({ levels: ['error', 'warn'] }),
  ],
  tracesSampleRate: 1.0,
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  enableLogs: true,
  beforeSend(event) {
    console.log("Event captured by Sentry:", event);
    return event;
  }
});

Sentry.

console.log("Sentry initialized:", sentryInit)


app.use(pinia)
app.use(router)
app.mount('#app')
