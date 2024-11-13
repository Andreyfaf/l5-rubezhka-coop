import PostalValidator from './src/PostalCodeSchema';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  // ipAddress() {
  //   return new IpValidator();
  // }
}

export default Validator;
