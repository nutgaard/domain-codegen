const fs = require('fs');
const pegjs = require('pegjs');

const grammar = fs.readFileSync('./peg/grammar.peg', 'utf-8');
const parser = pegjs.generate(grammar, {
    output: 'source',
    format: 'commonjs'
});

function fixJS(parser) {
    const cjsExport = `module.exports = {\n  SyntaxError: peg$SyntaxError,\n  parse:       peg$parse\n};`;
    const wantedExport = `export const parse = peg$parse;\nexport const SyntaxError = peg$SyntaxError;`;
    return parser.replace(cjsExport, wantedExport)
}
function fixJVM(parser) {
    const cjsExport = `module.exports = {\n  SyntaxError: peg$SyntaxError,\n  parse:       peg$parse\n};`;
    const jvmExport = `function parse() {\n    return JSON.stringify(peg$parse(...arguments));\n}`;
    return parser.replace(cjsExport, jvmExport);
}

fs.writeFileSync('./src/parser.js', fixJS(parser), 'utf-8');
fs.writeFileSync('./kotlinpoet/src/main/resources/parser.js', fixJVM(parser), 'utf-8');
