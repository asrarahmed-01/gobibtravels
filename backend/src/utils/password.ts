import bcrypt from "bcryptjs";

// Cost factor for bcrypt's hashing algorithm. Each +1 roughly DOUBLES the
// time it takes to hash (and to brute-force). 12 is the current widely
// recommended baseline — enough to make brute-forcing expensive, not so
// high it noticeably slows down login on modest hardware.
const SALT_ROUNDS = 12;

export async function hashPassword(plainTextPassword: string): Promise<string> {
  return bcrypt.hash(plainTextPassword, SALT_ROUNDS);
}

export async function comparePassword(
  plainTextPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainTextPassword, hashedPassword);
}
