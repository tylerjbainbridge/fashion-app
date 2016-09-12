import { connect } from 'react-redux';
import {
  addFormField,
  removeFormField,
  updateImage,
  updateCrop,
} from './UploadFitActions';
import UploadFit from './UploadFitComponent';

function mapStateToProps(state) {
  return {
    image: state.uploadFit.get('image'),
    serverError: state.uploadFit.get('error'),
    crop: state.uploadFit.get('crop'),
    fields: state.uploadFit.get('fields'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addField: (field) => dispatch(addFormField(field)),
    removeField: (name) => dispatch(removeFormField(name)),
    updateCrop: (crop) => dispatch(updateCrop(crop)),
    updateImage: (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onloadend = () => {
        if (reader.result) {
          dispatch(updateImage(reader.result));
        }
      };
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFit);
