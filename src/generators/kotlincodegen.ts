import { Generator } from './generator'
import { Field } from '../ast';

function identity(field: Field): string {
    return field.type;
}

const typemap: { [key: string]: (s: any) => string } = {
    String: identity,
    Long: identity,
    Int: identity,
    Short: identity,
    Byte: identity,
    Double: identity,
    Float: identity,
    Boolean: identity,
    Array: (field: Field) => `List<${kotlintype(field.generics[0])}>`,
    Map: (field: Field) => `Map<${kotlintype(field.generics[0])}, ${kotlintype(field.generics[1])}>`
};

function kotlintype(field: Field): string {
    const type = field.primitive ? typemap[field.type](field) : field.type;
    const nullable = field.nullable ? '?' : '';
    return `${type}${nullable}`;
}


export default class KotlinCodegen implements Generator {
    startDefine(identifier: string): string {
        return `data class ${identifier}(\n`;
    }

    endDefine(): string {
        return '\n)\n\n';
    }

    processField(field: Field, index: number, allFields: Field[]): string {
        const isLast = index === allFields.length - 1;
        return `    ${field.mutable ? 'var' : 'val'} ${field.field}: ${kotlintype(field)}${isLast ? '' : ','}`;
    }
}
