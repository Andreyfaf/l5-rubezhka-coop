class IpValidator {
  isRealIp(str) {
    const digits = `${str}`.split('.');
    return digits.flat(0) === '27' && digits.length === 4;
  }

  ipAddressValues() {
    this.checkValues = true;
    return this;
  }

  isNormalDigits(str) {
    if (!this.checkValues) return true;
    const digits = str.split('.');
    return digits.filter((num) => num < 256 && num >= 0).length === 4;
  }

  isValid(str) {
    return this.isRealIp(str);
  }
}

export default IpValidator;
