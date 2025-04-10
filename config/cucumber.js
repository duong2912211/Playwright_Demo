module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features/"
        ],
        publishQuiet: false,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:reports/cucumber_report.html",
            "rerun:@rerun.txt"
        ],
        parallel: 1,
        headless : process.env.npm_config_HEADLESS || true,
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: false,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:reports/cucumber_report.html",
            "rerun:@rerun.txt"
        ],
        parallel: 1,
        tags: process.env.npm_config_TAGS || "",
        worldParameters: {
            headless: (process.env.npm_config_HEADLESS || "true").toLowerCase() === "false" ? false : true // Default to true if undefined or empty
        }
    }
}