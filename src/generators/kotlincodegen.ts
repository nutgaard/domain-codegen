import { Generator } from './generator'
import { Field, OptionalField } from '../ast';

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
    if (!field.primitive) {
        return field.type;
    }

    return typemap[field.type](field);
}


export default class KotlinCodegen implements Generator {
    startDefine(identifier: string): string {
        return `data class ${identifier}(\n`;
    }

    endDefine(): string {
        return '\n)\n\n';
    }

    processField(field: OptionalField, index: number, allFields: OptionalField[]): string {
        const isLast = index === allFields.length - 1;
        return `    ${field.mutable ? 'var' : 'val'} ${field.field}: ${kotlintype(field)}${field.optional ? '?' : ''}${isLast ? '' : ''}`;
    }
}
