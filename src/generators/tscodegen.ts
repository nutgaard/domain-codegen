import { Generator } from './generator'
import { Field, OptionalField } from '../ast';

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
    Array: (field: Field) => `Array<${tstype(field.generics[0])}>`,
    Map: (field: Field) => `{ [ key: ${tstype(field.generics[0])}]: ${tstype(field.generics[1])} }`
};

function tstype(field: Field): string {
    if (!field.primitive) {
        return field.type;
    }

    return typemap[field.type](field);
}


export default class TsCodegen implements Generator {
    startDefine(identifier: string): string {
        return `export interface ${identifier} {\n`;
    }

    endDefine(): string {
        return '\n}\n\n';
    }

    processField(field: OptionalField): string {
        return `    ${field.mutable ? '' : 'readonly '}${field.field}${field.optional ? '?' : ''}: ${tstype(field)};`;
    }
}
