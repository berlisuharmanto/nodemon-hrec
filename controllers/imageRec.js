const ImageRec = require("../models/ImageRec");

const imageRecUpload = async (req, res) => {
  const { owner } = req.body;
  try {
    const file = new ImageRec({
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

const imageUpdate = async (req, res) => {
  try {
    const { owner } = req.params;
    const file = await ImageRec.findOne({ owner: owner });
    if (!file) {
      return res.status(404).send("File not found");
    }
    const updatedFile = await ImageRec.findOneAndUpdate(
      { owner: owner },
      {
        fileName: req.file.filename,
        fileType: req.file.mimetype,
        fileSize: req.file.size,
        filePath: req.file.path,
      },
      { new: true }
    );
    res.status(200).send(updatedFile);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getRecImage = async (req, res) => {
  try {
    const { owner } = req.params;
    const file = await ImageRec.findOne({ owner: owner });
    if (!file) {
      return res.status(404).send("File not found");
    }
    res.status(200).send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getRecImages = async (req, res) => {
  try {
    const images = await ImageRec.find();
    res.status(200).send(images);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { imageRecUpload, getRecImages, imageUpdate, getRecImage };
