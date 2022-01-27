<<<<<<< HEAD
import app from "./app.js";
import db from "./lib/db";

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((err) => {
  console.log(`Server not running. Error: ${err.message}`);
=======
import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
>>>>>>> fad71e247328db6b97938e0a59f15de9a80670ee
});
