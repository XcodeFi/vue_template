module.exports = {
  // type
  types: [
    { value: "feat", name: "feat: New product features" },
    { value: "fix", name: "fix: fix bug" },
    { value: "docs", name: "docs: Document changes" },
    {
      value: "style",
      name: "style: Does not change the changes of the code function (such as deleting spaces, formatting, removing the trailing semicolon, etc.)"
    },
    {
      value: "refactor",
      name: "refactor: rebuild code. Does not include bug fixes, new features"
    },
    {
      value: "perf",
      name: "perf: Performance optimization"
    },
    { value: "test", name: "test: Add and modify test cases" },
    {
      value: "build",
      name: "build: Build process, external dependency changes, such as upgrading npm package, modifying webpack configuration"
    },
    { value: "ci", name: "ci: Modified CI configuration and script" },
    {
      value: "chore",
      name: "chore: Changes to the build process or auxiliary tools and libraries do not affect other operations of source files and test cases"
    },
    { value: "revert", name: "revert: Rollback commit" }
  ],
  // scope type
  scopes: [
    ["components", "Public component"],
    ["pages", "page"],
    ["utils", "utils"],
    ["styles", "style"],
    ["deps", "Project dependency"],
    ["other", "Other modifications"],
    // If you choose custom, you will be asked to enter a custom scope later, or you don’t need to set this option, and set allowCustomScopes to true
    ["custom", "none of the above? I want to customize"]
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),
  // Overwrite prompted information
  messages: {
    type: "Please make sure that your submission follows the atomic submission specification! \nSelect the type you want to submit:",
    scope: "\nSelect a scope (optional):",
    // choose scope: custom The following prompt will appear when
    customScope: "Please enter a custom scope:  ",
    subject: "Fill in a short and concise description sentence:\n",
    body:'Add a more detailed description, you can attach a description of the new function or bug Link, screenshot link (optional). Use "|" to wrap:\n',
    breaking: "List major non-compatibility changes (optional):\n",
    footer: "List all changes ISSUES CLOSED  (Optional). E.g.: #31, #34:\n",
    confirmCommit: "confirm submission?"
  },

  // Whether to allow custom filling scope ,Set as true , Will automatically add two scope type [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  // allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body", "breaking", "footer"],
  subjectLimit: 100
};
