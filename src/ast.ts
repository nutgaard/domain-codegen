export interface Field {
    field: string;
    type: string;
    primitive: boolean;
    mutable: boolean;
    nullable: boolean;
    generics: Field[]
}

export interface Definition {
    identifier: string;
    fields: Field[];
}

export type AST = Array<Definition>;
