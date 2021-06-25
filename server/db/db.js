const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/juke",
  {
    logging: false,
  }
);

const Album = db.define("album", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-album.jpg",
  },
});

const Artist = db.define("artist", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Song = db.define("song", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  audioUrl: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
});

module.exports = { db, Album, Artist, Song };
