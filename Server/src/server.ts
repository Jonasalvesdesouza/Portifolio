import { app } from "./app";

const PORT = process.env.PORT || 3550;

app.listen(PORT, () => {
  console.log(`API Sucessfully started at port ${PORT}`);
});
