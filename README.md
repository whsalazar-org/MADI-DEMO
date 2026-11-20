# MADI-DEMO

Beyond more code: simplifying pull request review with AI

## Setup

Use Node.js 22 or newer. No third-party dependencies are required.

## Tests

Run the test suite with:

```sh
npm test
```

## Training defect

This demo intentionally treats the end date as exclusive in
`isDiscountActive`, even though the promotion policy says both boundaries are
inclusive. The defect is retained for training; do not fix it or add the
missing end-date regression test in this baseline.
