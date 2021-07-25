if (process.env.DEBUG === '1' || !!process.env.PRINT_SAAS_LAYER_VERSION) {
    const pkg = require(`${__dirname}/package.json`);
    console.log(`Using ${pkg.name} @ v${pkg.version}`);
}
