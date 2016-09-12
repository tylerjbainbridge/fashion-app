import sharp from 'sharp';
import Promise from 'bluebird';
// import _ from 'lodash';

class Modify {
  constructor(originalBuffer, type) {
    this.originalBuffer = originalBuffer;
    this.type = type;
    this.buffer = null;
  }

  cropToSquare() {
    return new Promise((resolve, reject) => {
      sharp(this.originalBuffer)
        .resize(200, 200)
        .crop(sharp.gravity.center)
        .toBuffer((bufferError, outputBuffer) => {
          if (bufferError) return reject(bufferError);
          return resolve(outputBuffer);
        });
    });
  }

  crop(crop) {
    return new Promise((resolve, reject) => {
      const left = parseInt(crop.left, 10);
      const top = parseInt(crop.top, 10);
      const width = parseInt(crop.width, 10);
      const height = parseInt(crop.height, 10);

      sharp(this.originalBuffer)
        .extract({ left, top, width, height })
        .toBuffer((bufferError, outputBuffer) => {
          if (bufferError) return reject(bufferError);
          return resolve(outputBuffer);
        });
    });
  }

}

export default Modify;
