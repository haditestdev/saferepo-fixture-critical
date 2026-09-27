# SafeRepo Critical Density Fixture (`saferepo-fixture-critical`)

## Purpose
This repository serves as the definitive high-volume benchmark for the **SafeRepo** security analysis engine. It evaluates:
1. High-throughput ingestion of **70 to 90 total security findings**.
2. Proper severity distribution across **Critical**, **High**, **Medium**, and **Low** classifications.
3. Multi-language dependency tree parsing (Python `requirements.txt` via `pip-audit`/`OSV`, and Node.js `package.json` via `npm audit`/`OSV`).
4. Comprehensive SAST detection (Semgrep across Python and TypeScript).
5. Secret scanner pattern recognition (Gitleaks on synthetic keys).

## Finding Volume Expectations
- **Total Findings Range:** 70 to 90 findings
- **Critical Findings:** 12 to 20
- **High Findings:** 35 to 45
- **Medium Findings:** 20 to 28
- **Low / Informational:** 5 to 10

## Safety Disclaimer
All vulnerabilities, command calls, deserialization structures, and secrets are strictly synthetic, benign, and intended solely for security scanner calibration.
