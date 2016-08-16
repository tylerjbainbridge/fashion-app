import aws from 'aws-sdk';
import Promise from 'bluebird';

aws.config.setPromisesDependency(require('bluebird'));

class AWS {
  constructor(username, type, id) {
    this.username = username;
    this.type = type;
    this.id = id;
  }

  upload(buffer, ext) {
    return Promise.try(() => {
      const { username, type, id } = this;
      this.key = `images/${username}/${type}/${id}.${ext}`;
      const s3 = new aws.S3();
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: this.key,
        Body: buffer,
        ContentType: 'image/jpeg',
        ACL: 'public-read',
      };
      return s3.putObject(params).promise();
    })
    .then(() => Promise.resolve(this.key))
    .catch((err) => Promise.reject(err));
  }
}

export default AWS;
