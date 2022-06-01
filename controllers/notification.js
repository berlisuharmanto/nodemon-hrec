const Notification = require("../models/notification");

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).send(notifications);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createNotification = async (req, res) => {
  try {
    const { hrd, appli } = req.body;

    const notification = new Notification({
      hrd,
      appli,
      date: new Date(),
    });
    await notification.save();
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getNotifications,
  getNotification,
  createNotification,
};
