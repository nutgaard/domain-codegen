import { AST, Field } from '../ast';

export interface Generator {
    startDefine(identifier: string): string;
    endDefine(): string;
    processField(field: Field, index: number, allFields: Field[]): string;
}

export default function generate(ast: AST, generator: Generator): string {
    return ast
        .map((definition) => {
            const start = generator.startDefine(definition.identifier);
            const fields = definition.fields
                .map(generator.processField)
                .join('\n');
            const end = generator.endDefine();

            return `${start}${fields}${end}`;
        })
        .join('');
}
