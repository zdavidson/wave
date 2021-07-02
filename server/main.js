const PORT = 8080;
const server = require("./index");
const { db } = require("./db");

const init = async () => {
  try {
    await db.sync();
    server.listen(process.env.NODE_ENV || PORT, () =>
      console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/

      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();
