# Security Policy

## Reporting a vulnerability

Do not disclose vulnerabilities in public issues, discussions, or pull requests.

Use [GitHub's private vulnerability reporting](https://github.com/jst-stack/jst-showcase/security/advisories/new). If private reporting is unavailable, contact the maintainer through their GitHub profile and request a private channel without including vulnerability details in the first message.

Include affected versions, impact, reproduction steps, and any known mitigation. You should receive an acknowledgement within seven days; timelines for a fix and coordinated disclosure depend on severity and scope.

## Supported versions

Security fixes target the latest commit on `main`. Applications created from this template must maintain their own dependency updates and security policy.

## Dependency policy

`npm run audit:production` blocks high-severity production dependency advisories, and `npm run audit:development` applies the review recorded in `security/development-advisories.json`. Development-only tools are reviewed separately because npm may report advisories in fixed-input linters and test runners before an upstream release exists; the ledger can never hide a production advisory, because a waived package that `npm audit --omit=dev` also reports fails the gate.

The ledger is keyed by package, not by advisory id: npm reissues advisory ids for the same package while the review decision stays unchanged, so the record survives registry refreshes and dependency bumps on its own. Waivers expire, and an expired waiver fails the gate rather than silently remaining. Run `npm run audit:development:sync` to record the packages the current lockfile reports as development-only, and `npm run audit:development:sync -- --review` to renew expiring waivers for another 90 days, then replace the generated `reason` with the actual decision. The script refuses to record a waiver for anything that reaches the production tree.
