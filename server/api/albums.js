const express = require("express");
const router = express.Router();

const { Album, Artist, Song } = require("../db");

// GET /api/albums
router.get("/", async (req, res, next) => {
  const albums = await Album.findAll({ include: Artist });

  res.json(albums);
});

// GET /api/albums/:albumId
router.get("/:albumId", async (req, res, next) => {
  const album = await Album.findOne({
    where: { id: req.params.albumId },
    include: [{ model: Artist }, { model: Song }],
  });
  res.json(album);
});

module.exports = router;
