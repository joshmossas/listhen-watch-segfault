import { createApp, eventHandler } from "h3";

const app = createApp();
app.use(
  "/",
  eventHandler((event) => {
    return {
      message: "Hello world",
    };
  })
);

export default app;
