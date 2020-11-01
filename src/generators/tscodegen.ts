import { Generator } from './generator'
import { Field } from '../ast';

function asFn<S>(val: S | (() => S)): () => S {
    if (typeof val === 'function') {
        return val as (() => S);
    }
    return () => val;
}

const typemap: { [key: string]: (s: any) => string } = {
    String: asFn('string'),
    Long: asFn('number'),
    Int: asFn('number'),
    Short: asFn('number'),
    Byte: asFn('number'),
    Double: asFn('number'),
    Float: asFn('number'),
    Boolean: asFn('boolean'),
    Array: (field: Field) => `Array<${genericType(field.generics[0])}>`,
    Map: (field: Field) => `{ [ key: ${tstype(field.generics[0])} ]: ${genericType(field.generics[1])} }`
};

function tstype(field: Field): string {
    return field.primitive ? typemap[field.type](field) : field.type;
}

function genericType(field: Field): string {
    const type = field.primitive ? typemap[field.type](field) : field.type;
    const nullable = field.nullable ? ' | null' : '';
    return `${type}${nullable}`;
}

export default class TsCodegen implements Generator {
    startDefine(identifier: string): string {
        return `export interface ${identifier} {\n`;
    }

    endDefine(): string {
        return '\n}\n\n';
    }

    processField(field: Field): string {
        return `    ${field.mutable ? '' : 'readonly '}${field.field}${field.nullable ? '?' : ''}: ${tstype(field)};`;
    }
}
