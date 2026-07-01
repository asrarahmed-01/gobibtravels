// A structured error type that carries an HTTP status code alongside the
// message. Services/controllers throw this; the central error handler
// (middleware/errorHandler.ts) is the only place that knows how to turn
// it into an HTTP response. This keeps "business logic" and "HTTP concerns"
// separate.
export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean; // expected error (bad input, etc.) vs a real bug

  constructor(statusCode: number, message: string, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Restores correct prototype chain — needed when extending built-ins
    // like Error while targeting older JS runtimes/transpilation.
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad request") {
    return new ApiError(400, message);
  }
  static unauthorized(message = "Unauthorized") {
    return new ApiError(401, message);
  }
  static forbidden(message = "Forbidden") {
    return new ApiError(403, message);
  }
  static notFound(message = "Not found") {
    return new ApiError(404, message);
  }
  static conflict(message = "Conflict") {
    return new ApiError(409, message);
  }
  static internal(message = "Internal server error") {
    return new ApiError(500, message, false);
  }
}
