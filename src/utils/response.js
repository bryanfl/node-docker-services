class Response {
  constructor(isValid, content, exceptions) {
    this.isValid = isValid || false;
    this.content = content || null;
    this.exceptions = exceptions || [];
  }
}

module.exports = Response;
