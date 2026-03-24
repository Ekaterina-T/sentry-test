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

// filter integrations that use the global variable
const integrations =Sentry.getDefaultIntegrations({}).filter(
  (defaultIntegration) => {
    return true || !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(
      defaultIntegration.name,
    );
  },
);

// const dns2 = 'https://11c23b8680c61febce852f431db4491a@o4511089344380928.ingest.de.sentry.io/4511095827791952'
const dns3 = 'https://8aa2640f58c8a090d64923d310ab647c@o4511089344380928.ingest.de.sentry.io/4511098540130384'
const dns4 = 'https://6d11de15dbfe353a7da26f0f7d66e5a5@o4511089344380928.ingest.de.sentry.io/4511098687062096'
const dns5 = 'https://8af89f614c7a0868add605b116baabbe@o4511089344380928.ingest.de.sentry.io/4511099137097808'

const client = new Sentry.BrowserClient({
  dsn: dns4,
  sendDefaultPii: false,
  transport: Sentry.makeFetchTransport,
  stackParser: Sentry.defaultStackParser,
  integrations: integrations,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  enableLogs: true,
  beforeSend(event) {
    console.log("Event captured by Sentry:", event);
    event.exception
    return event;
  }
});
const scope = new Sentry.Scope();
scope.setClient(client);
scope.setUser({ id: "12345", email: "", username: "test_user" });
client.init(); // initializing has to be done after setting the client on the scope


const client2 = new Sentry.BrowserClient({
  dsn: dns5,
  sendDefaultPii: false,
  transport: Sentry.makeFetchTransport,
  stackParser: Sentry.defaultStackParser,
  integrations: integrations,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  enableLogs: true,
  beforeSend(event) {
    console.log("Event captured by Sentry:", event);
    event.exception
    return event;
  }
});
client2.init(); // initializing has to be done after setting the client on the scope
const scope2 = new Sentry.Scope();
scope2.setClient(client2);
scope2.setUser({ id: "sdfsdf", email: "", username: "test_user2" });

scope.captureMessage("Test message from client 4");
scope2.captureMessage("Test message from client 5");

export {client, scope, client2, scope2};

Sentry.init({
  app,
  dsn: dns3,
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
    event.exception
    return event;
  }
});

// console.log("Sentry initialized:", sentryInit)


app.use(pinia)
app.use(router)
app.mount('#app')
