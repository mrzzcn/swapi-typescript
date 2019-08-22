let typescript = require('rollup-plugin-typescript2');
let babel = require('rollup-plugin-babel');

let pkg = require('../package.json');

let name = pkg.name.split('/').pop();
let version = pkg.version;

let banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/mrzzcn/swapi-typescript)
 * API https://github.com/mrzzcn/swapi-typescript/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} Jack. All Rights Reserved
 * Licensed under MIT (https://github.com/mrzzcn/swapi-typescript/blob/master/LICENSE)
 */
`;

let type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'targets': {
                            'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                            'node': '0.10'
                        },
                        'modules': false,
                        'loose': false
                    }
                ]
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        'helpers': false,
                        'regenerator': false
                    }
                ]
            ],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    };

    return typescript(opt);
}

exports.type = type;
exports.name = 'SWAPI';
exports.banner = banner;
exports.getCompiler = getCompiler;
