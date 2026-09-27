# Expected Findings Ledger: saferepo-fixture-critical

| ID | Scanner | Category | Target File | Vulnerability / Rule Pattern | Scanner Severity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SCA-PY-01 | pip-audit / OSV | SCA | `requirements.txt` | `eventlet==0.33.0` (CVE-2023-29483) | High / Critical |
| SCA-PY-02 | pip-audit / OSV | SCA | `requirements.txt` | `Pillow==8.1.0` (CVE-2021-25290) | Critical |
| SCA-PY-03 | pip-audit / OSV | SCA | `requirements.txt` | `Pillow==8.1.0` (CVE-2021-25291) | Critical |
| SCA-PY-04 | pip-audit / OSV | SCA | `requirements.txt` | `Pillow==8.1.0` (CVE-2021-25292) | Critical |
| SCA-PY-05 | pip-audit / OSV | SCA | `requirements.txt` | `Pillow==8.1.0` (CVE-2021-25293) | High |
| SCA-PY-06 | pip-audit / OSV | SCA | `requirements.txt` | `django==2.2.10` (CVE-2020-9402 SQLi) | Critical |
| SCA-PY-07 | pip-audit / OSV | SCA | `requirements.txt` | `django==2.2.10` (CVE-2020-7471 SQLi) | Critical |
| SCA-PY-08 | pip-audit / OSV | SCA | `requirements.txt` | `cryptography==3.3.1` (CVE-2020-36242) | High |
| SCA-PY-09 | pip-audit / OSV | SCA | `requirements.txt` | `sqlparse==0.4.3` (CVE-2023-30608 ReDoS) | High |
| SCA-PY-10 | pip-audit / OSV | SCA | `requirements.txt` | `PyYAML==5.3.1` (CVE-2020-14343) | Critical |
| SCA-PY-11 | pip-audit / OSV | SCA | `requirements.txt` | `Flask==0.12.2` (CVE-2018-1000656) | High |
| SCA-PY-12 | pip-audit / OSV | SCA | `requirements.txt` | `urllib3==1.26.4` (CVE-2021-33503) | High |
| SCA-JS-01 | npm audit / OSV | SCA | `package.json` | `lodash@4.17.15` (CVE-2020-8203) | High |
| SCA-JS-02 | npm audit / OSV | SCA | `package.json` | `lodash@4.17.15` (CVE-2019-10744 Prototype Pollution) | Critical |
| SCA-JS-03 | npm audit / OSV | SCA | `package.json` | `cross-spawn@7.0.4` (CVE-2024-21538) | High |
| SCA-JS-04 | npm audit / OSV | SCA | `package.json` | `moment@2.29.1` (CVE-2022-24785 Path Traversal) | High |
| SCA-JS-05 | npm audit / OSV | SCA | `package.json` | `moment@2.29.1` (CVE-2022-31129 ReDoS) | High |
| SCA-JS-06 | npm audit / OSV | SCA | `package.json` | `node-forge@0.10.0` (CVE-2022-24771) | High |
| SCA-JS-07 | npm audit / OSV | SCA | `package.json` | `node-forge@0.10.0` (CVE-2022-24772) | High |
| SCA-JS-08 | npm audit / OSV | SCA | `package.json` | `node-forge@0.10.0` (CVE-2022-24773) | High |
| SCA-JS-09 | npm audit / OSV | SCA | `package.json` | `handlebars@4.7.6` (CVE-2021-23369 RCE) | Critical |
| SCA-JS-10 | npm audit / OSV | SCA | `package.json` | `handlebars@4.7.6` (CVE-2021-23382 RCE) | Critical |
| SCA-JS-11 | npm audit / OSV | SCA | `package.json` | `ip@1.1.8` (CVE-2023-42282 SSRF Bypass) | High |
| SCA-JS-12 | npm audit / OSV | SCA | `package.json` | `tar@6.1.0` (CVE-2021-37701) | High |
| SCA-JS-13 | npm audit / OSV | SCA | `package.json` | `tar@6.1.0` (CVE-2021-37712) | High |
| SCA-JS-14 | npm audit / OSV | SCA | `package.json` | `ejs@3.1.6` (CVE-2022-29078) | High |
| SCA-JS-15 | npm audit / OSV | SCA | `package.json` | `axios@0.21.1` (CVE-2020-28168) | Medium |
| SCA-JS-16 | npm audit / OSV | SCA | `package.json` | `jsonwebtoken@8.5.1` (CVE-2022-23529) | High |
| SCA-JS-17 | npm audit / OSV | SCA | `package.json` | `minimatch@3.0.4` (CVE-2022-35170) | Medium |
| SCA-JS-18 | npm audit / OSV | SCA | `package.json` | `qs@6.5.2` (CVE-2017-1000048) | Medium |
| SCA-JS-19 | npm audit / OSV | SCA | `package.json` | `semver@7.5.1` (CVE-2022-25883) | Medium |
| SEC-01 | Gitleaks | Secret | `lib/security-fixtures.ts`:10 | Synthetic AWS Access Key | High |
| SEC-02 | Gitleaks | Secret | `lib/security-fixtures.ts`:11 | Synthetic GitHub PAT | High |
| SEC-03 | Gitleaks | Secret | `lib/security-fixtures.ts`:12 | Synthetic Slack Webhook | Medium |
| SEC-04 | Gitleaks | Secret | `lib/security-fixtures.ts`:13 | Synthetic Stripe Test Key | High |
| SEC-05 | Gitleaks | Secret | `backend/processor.py`:10 | Synthetic Stripe Live Key Pattern | High |
| SAST-01..25 | Semgrep | SAST | Multiple | Multiple SQLi, Command Injection, Deserialization, SSRF | High / Critical |
