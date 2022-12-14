import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import 'vuestic-ui/dist/vuestic-ui.css'

const app = createApp(App);

app.use(createVuestic());

app.mount("#app");
