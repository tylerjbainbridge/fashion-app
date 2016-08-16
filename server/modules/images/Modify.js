import sharp from 'sharp';
import fs from 'fs';
import Promise from 'bluebird';
// import _ from 'lodash';

class Modify {
  constructor(originalBuffer, type) {
    this.originalBuffer = originalBuffer;
    this.type = type;
    this.buffer = null;
  }

  cropToSquare() {
    return Promise.try(() => {
      sharp(this.originalBuffer)
        .resize(200, 200)
        .crop(sharp.gravity.center)
        .toBuffer((bufferError, outputBuffer, info) => {
          if (bufferError) return Promise.reject(bufferError);
          return fs.writeFile('output.jpg', outputBuffer, (writeErr) => {
            if (writeErr) return Promise.reject(writeErr);
            return Promise.resolve(outputBuffer, info);
          });
        });
    });
  }


}

export default Modify;
