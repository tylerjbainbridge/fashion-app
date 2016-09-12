import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Cropper from 'cropperjs';
import Dropzone from 'react-dropzone';

class UploadFit extends Component {
  constructor(props) {
    super(props);
    this.form = {};
    this.fields = [];
    this.options = [
      'hat',
      'jacket',
      'overshirt',
      'shirt',
      'watch',
      'pants',
      'shoes',
    ];
    this.optionState = 'shirt';
  }

  componentDidUpdate() {
    if (this.props.image) {
      const image = document.getElementById('image');
      const aspectRatio = 9 / 16;
      const crop = (e) => {
        this.props.updateCrop(e.detail);
      };
      this.cropper = new Cropper(
        image, {
          aspectRatio,
          crop,
        }
      );
    }
  }

  // onDrop(file) {
  //   console.log(file);
  // }

  addField(value) {
    const name = `${value}Designer`;
    this.props.addField({
      name,
      label: value,
    });
  }

  removeOption(name) {
    _.pull(this.options, name);
  }

  removeField(name) {
    let index = null;
    this.props.fields.forEach((field, i) => {
      if (field.name === name) {
        index = i;
        return;
      }
    });

    if (index >= 0) {
      this.props.removeField(index);
    }
  }

  render() {
    return (
      <div className="uploadFit">
        <form>
          <div className="uploadFitLeft">
            { !this.props.image
              ?
              <div>
                <span>Choose An Image</span>
                <Dropzone
                  onDrop={(file) => {
                    this.props.updateImage(file);
                  }}
                  multiple={false}
                  style={{ border: 'none' }}
                >
                  <div className="dropZone">
                    <b>Click to Browse</b>
                    <br />or<br />
                    <b>Drag and Drop</b>
                  </div>
                </Dropzone>
              </div>
              :
              <div>
                <span>Thumbnail</span>
                <img id="image" src={this.props.image} alt="preview" />
              </div>
            }

          </div>
          <div className="uploadFitRight">
            <span>Details</span>
            {this.props.fields.map((field, key) =>
              <span key={key}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  id={field.name}
                  placeholder="designer"
                  onChange={(e) => {
                    this.form[e.target.name] = e.target.value;
                  }}
                />
                <span
                  type="button"
                  onClick={() => {
                    this.removeField(field.name);
                  }}
                  style={{ color: 'red' }}
                >
                  X
                </span>
              </span>
            )}
            <select
              onChange={(e) => {
                this.optionState = e.target.value;
              }}
            >
              {this.options.map((option, key) =>
                <option key={key} value={option}>{option}</option>
              )}
            </select>
            <button
              type="button"
              onClick={() => {
                this.addField(this.optionState);
              }}
            >
            Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

UploadFit.propTypes = {
  fields: PropTypes.object.isRequired,
  image: PropTypes.string,
  addField: PropTypes.func.isRequired,
  removeField: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  updateCrop: PropTypes.func.isRequired,
  fieldChanged: PropTypes.func.isRequired,
};

export default UploadFit;
