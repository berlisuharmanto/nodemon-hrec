const Notification = require("../models/notification");

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).send(notifications);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserNotification = async (req, res) => {
  try {
    const { hrd } = req.params;
    const notification = await Notification.find({ hrd: hrd });
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createNotification = async (req, res) => {
  try {
    const { hrd, appli, status } = req.body;

    const notification = new Notification({
      hrd,
      appli,
      status,
      date: new Date(),
    });
    await notification.save();
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).send("Notification deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getNotifications,
  getUserNotification,
  createNotification,
  deleteNotification,
};
