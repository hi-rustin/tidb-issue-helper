export default function createPreview(issueType: string, values: any) {
  if (issueType === "bug") {
    return createBugPreview(values);
  }
  return createFeaturePreview(values);
}

function createBugPreview({
  version,
  mysql,
  steps,
  expected,
  actual,
  extra
}: any) {
  return `
### Steps to reproduce
${steps}

### What is expected?
${expected}

### What is actually happening?
${actual}

| Environment | Info |
|---|---|
| TiDB Version | ${version} |
| MySQL Version | ${mysql} |

${extra ? `---\n${extra}` : ""}
`.trim();
}

function createFeaturePreview({ motivation, proposal }: any) {
  return `
### What problem does this feature solve?
${motivation}

### What does the proposed API look like?
${proposal}
`.trim();
}
