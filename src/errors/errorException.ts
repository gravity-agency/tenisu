export class ErrorException {
  /**
   * Error class for http error response management
   * @param code - Http error code
   * @param res - Response object of node function
   * @param errorMessage - custom error message - can be null
   */

  static getErrorResponse(code: number, res: any, errorMessage: string | null) {
    switch (code) {
      case 400:
        return res.status(code).json({
          error: errorMessage || 'Invalid request parameters !',
        });
      case 401:
        return res.status(code).json({
          error: errorMessage || 'Unauthorized !',
        });
      case 403:
        return res.status(code).json({
          error: errorMessage || 'Forbidden !',
        });
      case 404:
        return res.status(code).json({
          error: errorMessage || 'Resource not found !',
        });
      case 409:
        return res.status(code).json({
          error: errorMessage || 'Conflict !',
        });
      default:
        return res.status(500).json({
          error: 'Internal Server Error !',
        });
    }
  }
}
