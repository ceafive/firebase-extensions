import * as functions from "firebase-functions";
import logger from "../logs";

// Mock the functions logger
jest.mock("firebase-functions");

describe("Logger Tests", () => {
  it("should log sending verification email", () => {
    logger.sendingVerificationEmail("test@example.com");
    expect(functions.logger.log).toHaveBeenCalledWith("Sending verification email to test@example.com ====>");
  });

  it("should log verification email sent", () => {
    logger.sentVerificationEmail("test@example.com");
    expect(functions.logger.log).toHaveBeenCalledWith("Email sent to test@example.com ====>");
  });

  it("should log sending email error", () => {
    const mockError = new Error("Test error");
    logger.sendingEmailError("test@example.com", mockError);
    expect(functions.logger.error).toHaveBeenCalledWith("Error sending verification email to test@example.com ====>", mockError);
  });

  it("should log skipped verification email", () => {
    logger.skipSendVerificationEmail("test@example.com", true);
    expect(functions.logger.log).toHaveBeenCalledWith(
      "Sending verification email to test@example.com skipped due to 'Send verification email on user creation' set to true ====>",
    );
  });

  it("should log skipped verification email when sendEmailVerification is false", () => {
    logger.skipSendVerificationEmail("test@example.com", false);
    expect(functions.logger.log).toHaveBeenCalledWith(
      "Sending verification email to test@example.com skipped due to 'Send verification email on user creation' set to false ====>",
    );
  });
});
