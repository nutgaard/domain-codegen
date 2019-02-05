export interface Definition {
    identifier: string;
    fields: OptionalField[];
}

export interface Field {
    field: string;
    type: string;
    primitive: boolean;
    mutable: boolean;
    generics: Field[]
}

export interface OptionalField extends Field {
    optional: boolean;
}

export type AST = Array<Definition>;
