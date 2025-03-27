module.exports = {
    default: {
      require: [
        'ts-node/register',      // Load TypeScript module
        './steps/*.ts', // Path to step definitions
        './hooks/hooks.ts',      // Path to custom hooks
      ],
      format: ['@cucumber/pretty-formatter'],          // Output format
      paths: ['./features/*.feature'], // Path to feature files
      publishQuiet: true,          // Disable Cucumber report publishing
    },
  };