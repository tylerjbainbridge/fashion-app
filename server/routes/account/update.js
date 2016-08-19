import express from 'express';
import multer from 'multer';
import path from 'path';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import fileType from 'file-type';
import Image from '../../models/Image';
import Modify from '../../modules/images/Modify';
import AWS from '../../modules/images/AWS';

const storage = multer.memoryStorage();
const upload = multer({
  dest: path.join(__dirname, '/uploads/'),
  storage,
});
const router = express();

mongoose.promise = require('bluebird');

router.post('/propic', upload.single('propic'), (req, res) => {
  const newImage = new Image({});
  Promise.try(() => {
    if (req.user) {
      newImage.userid = req.user.id;
      newImage.username = req.user.username;
      newImage.type = 'propic';
    } else {
      throw new Error('must be logged in');
    }
  })
  .then(() => {
    const type = fileType(req.file.buffer);
    if (['jpg', 'jpeg', 'png'].indexOf(type.ext) > 0 || !type.ext) {
      throw new Error('File type must be: "jpg", "jpeg", or "png"');
    }
    newImage.ext = type.ext;
    return null;
  })
  .then(() => {
    const image = new Modify(req.file.buffer);
    return image.cropToSquare();
  })
  .then((file) => {
    const aws = new AWS(req.user.username, 'propic', newImage.id);
    return aws.upload(file, newImage.ext);
  })
  .then((key) => {
    newImage.key = key;
    newImage.imageURL = `http://d2o0f6zllb2kj2.cloudfront.net/${key}`;
    return newImage.save();
  })
  .then(() => {
    req.user.profilePicture = {
      imageURL: newImage.imageURL,
      imageid: newImage.id,
    };
    req.user.save((err) => {
      if (err) throw err;
      return;
    });
  })
  .then(() => {
    res.send(newImage);
  })
  .catch((err) => {
    res.send({ err: err.toString() });
  });
});

export default router;
