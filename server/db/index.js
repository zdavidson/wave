const { db, Album, Artist, Song } = require("./db");

Artist.hasMany(Album, { foreignKey: "artistId" });
Artist.hasMany(Song, { foreignKey: "artistId" });
Album.hasMany(Song, { foreignKey: "albumId" });

Song.belongsTo(Album);
Song.belongsTo(Artist);
Album.belongsTo(Artist);

module.exports = {
  db,
  Album,
  Artist,
  Song,
};
