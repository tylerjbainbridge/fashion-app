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


}

export default Modify;
