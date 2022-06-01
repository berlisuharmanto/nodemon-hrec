const ImageAppRec = require("../models/ImageAppRec");

const imageAppRecUpload = async (req, res) => {
  const { owner } = req.body;
  try {
    const file = new ImageAppRec({
      fileName: req.file.filename,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      filePath: req.file.path,
      owner,
    });
    await file.save();
    res.status(201).send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAppImages = async (req, res) => {
  try {
    const images = await ImageAppRec.find();
    res.status(200).send(images);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { imageAppRecUpload, getAppImages };
