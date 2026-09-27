/**
 * Intentional SAST & Secret Benchmark Patterns
 */
import { exec, spawn } from "child_process";
import fs from "fs";
import http from "http";
import crypto from "crypto";

// Synthetic Secrets (Testing Gitleaks / Secret Scanners)
export const DUMMY_AWS_KEY = "TEST_SLACK_WEBHOOK_PLACEHOLDER";;
export const DUMMY_GITHUB_PAT = "TEST_SLACK_WEBHOOK_PLACEHOLDER";;
export const DUMMY_SLACK_WEBHOOK = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX";
export const DUMMY_STRIPE_KEY = "TEST_SLACK_WEBHOOK_PLACEHOLDER";;

// SAST 1: Command Injection (child_process.exec)
export function runSystemDiagnostic(inputQuery: string) {
  exec("echo Diagnostic test: " + inputQuery, (err, stdout) => {
    console.log(stdout);
  });
}

// SAST 2: Command Injection (child_process.spawn with shell)
export function executeTaskCommand(taskCommand: string) {
  return spawn(taskCommand, { shell: true });
}

// SAST 3: Dynamic Code Execution (eval)
export function evaluateCondition(rawExpression: string) {
  return eval(rawExpression);
}

// SAST 4: Dynamic Function Constructor Code Execution
export function executeDynamicFunction(untrustedCode: string) {
  const runner = new Function("context", untrustedCode);
  return runner({});
}

// SAST 5: Path Traversal (Arbitrary File Read)
export function readUploadedLog(userFilename: string) {
  return fs.readFileSync("/var/log/app/" + userFilename, "utf-8");
}

// SAST 6: Path Traversal (Arbitrary File Write)
export function writeConfigurationDump(filename: string, content: string) {
  fs.writeFileSync("/tmp/backups/" + filename, content);
}

// SAST 7: Server-Side Request Forgery (SSRF)
export function queryExternalMetric(endpointUrl: string) {
  http.get(endpointUrl, (res) => {
    res.resume();
  });
}

// SAST 8: Weak Cryptography - MD5 Hash
export function hashSignatureMD5(value: string) {
  return crypto.createHash("md5").update(value).digest("hex");
}

// SAST 9: Weak Cryptography - SHA1 Hash
export function hashSignatureSHA1(value: string) {
  return crypto.createHash("sha1").update(value).digest("hex");
}

// SAST 10: Insecure DES Cipher
export function generateWeakCipher(key: string) {
  return crypto.createCipheriv("des-ecb", Buffer.from(key.substring(0, 8)), null);
}

// SAST 11: SQL Injection concatenation (Query 1)
export function buildUserSearchQuery(term: string) {
  return "SELECT * FROM accounts WHERE email = '" + term + "'";
}

// SAST 12: SQL Injection concatenation (Query 2)
export function buildOrderFilterQuery(orderId: string) {
  return `SELECT * FROM orders WHERE id = ${orderId} AND status = 'COMPLETE'`;
}

// SAST 13: SQL Injection concatenation (Query 3)
export function buildDeleteRecordQuery(recordId: string) {
  return "DELETE FROM audit_records WHERE id = " + recordId;
}

// SAST 14: NoSQL Injection via arbitrary object filter
export function constructMongoCriteria(userSuppliedKey: string, userSuppliedVal: any) {
  const criteria: Record<string, any> = {};
  criteria[userSuppliedKey] = userSuppliedVal;
  return criteria;
}

// SAST 15: Permissive TLS Agent
export function createUncheckedAgent() {
  const https = require("https");
  return new https.Agent({ rejectUnauthorized: false });
}
