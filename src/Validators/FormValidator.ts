export const EmailValidator = {
  required: "Email is required",
  minLength: {
    value: 11,
    message: "Email should be at least 11 characters long",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
    message: "Should be email formal with @gmail.com at the end ",
  },
  validate: {
    notAdminOrTest: (value: string) =>
      !["admin@gmail.com", "test@gmail.com"].includes(value.toLowerCase()) ||
      "Email cannot be 'admin@gmail.com' or 'test@gmail.com'",
  },
};

export const PasswordValidator = {
  required: "Password is required",
  validate: {
    trimCheck: (value: string) =>
      value.trim() !== "" || "Password cannot be empty or spaces only",
    lengthCheck: (value: string) => {
      const trimmedValue = value.trim();
      return (
        (trimmedValue.length >= 5 && trimmedValue.length <= 16) ||
        "Password must be between 5 and 16 characters"
      );
    },
    capitalCheck: (value: string) =>
      /[A-Z]/.test(value) ||
      "Password must contain at least one capital letter",
    symbolCheck: (value: string) =>
      /[!@#$%]/.test(value) ||
      "Password must contain at least one special character (!@#$%)",
  },
};
