// rollup.locales.js
const fs = require('fs');
const path = require('path');

// commonjs
const common = require('./rollup.js');

const locales = fs.readdirSync(path.resolve(__dirname, '../src/locales'));

module.exports = locales.map(localeFile => {
    const { name: locale, ext } = path.parse(localeFile);

    return {
        input: 'src/locales/' + locale + ext,
        output: {
            file: 'dist/locales/' + locale + '.js',
            format: 'cjs',
            // When export and export default are not used at the same time, set legacy to true.
            // legacy: true,
        },
        plugins: [
            common.getCompiler({
                tsconfigOverride: { compilerOptions: { declaration: true, module: 'ES2015' } },
                useTsconfigDeclarationDir: true
            })
        ]
    };
});
