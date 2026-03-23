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

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: false,
  integrations: [
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration()
  ],
  // Tracing
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.,
  // Logs
  enableLogs: true
});

Sentry.getGlobalScope().setAttributes({
  service: "to-do-list-app",
});



app.use(pinia)
app.use(router)
app.mount('#app')
