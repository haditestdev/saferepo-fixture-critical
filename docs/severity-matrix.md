# Severity Normalization Matrix

| Original Scanner Severity | SafeRepo Normalized Target | Example Finding |
| :--- | :--- | :--- |
| Critical | Critical | `handlebars` prototype pollution RCE |
| High | High | `child_process.exec` command injection |
| Medium / Moderate | Medium | `minimatch` ReDoS |
| Low / Warning | Low | `target="_blank"` missing `rel="noreferrer"` |
| Info | Informational | Verbose headers / fingerprinting |
