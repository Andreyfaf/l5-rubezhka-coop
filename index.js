import PostalValidator from './src/PostalCodeSchema.js';
import IpValidator from './src/IpAddressSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new IpValidator();
  }
}

export default Validator;
