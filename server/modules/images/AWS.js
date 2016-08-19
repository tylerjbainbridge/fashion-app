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
    return new Promise((resolve, reject) => {
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
      return s3.putObject(params).promise()
      .then(() => resolve(this.key))
      .catch((err) => reject(err));
    });
  }
}

export default AWS;
