import React, { useState } from 'react';
import { AST } from './ast';
import generate from './generators/generator';
import TsCodegen from './generators/tscodegen';
import KotlinCodegen from './generators/kotlincodegen';
import parser from './parser';
import './application.css';

function useField<S extends string>(initialValue: S): [S, React.ChangeEventHandler<any>] {
    const [value, setValue] = useState<S>(initialValue);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value as S);

    return [value, onChange];
}

function generateAst(value: string): { ast: AST, error?: string } {
    try {
        return { ast: parser.parse(value), error: undefined };
    } catch (e) {
        return { ast: [], error: e.message }
    }
}

function generateCode(value: string) {
    return value;
}

const testcase = `define Deep {
  var maps: Map<Int, Map<Int, Map<Int, Deep>>>
  var lists: Array<Array<Array<Deep>>>
}

define Kunde {
  val id: String?
  val navn: String
  var kontoer: Array<Konto>?
  val bekjente: Map<String, Kunde>
}

define Konto {
  val id: String
  val kroner: Int
  val ore: Int
}`;

function Application() {
    const [definition, setDefinition] = useField(testcase);
    const ast = generateAst(definition);
    const tsCode = generate(ast.ast, new TsCodegen());
    const kotlinCode = generate(ast.ast, new KotlinCodegen());

    return (
        <div className="application">
            <div className="editor">
                <div className="editor__textarea editor__definition">
                    <label htmlFor="definitiontxt">Definition</label>
                    <textarea id="definitiontxt" value={definition} onChange={setDefinition}/>
                </div>
                <div className="editor__textarea editor__ast">
                    <label htmlFor="asttxt">AST</label>
                    <textarea id="asttxt" value={JSON.stringify(ast.ast, null, 2)} readOnly/>
                </div>
                <div className="editor__textarea editor__code">
                    <label htmlFor="codetxt">Code</label>
                    <textarea id="codetxt" value={tsCode} readOnly/>
                </div>
                <div className="editor__textarea editor__code">
                    <label htmlFor="codetxt">Code</label>
                    <textarea id="codetxt" value={kotlinCode} readOnly/>
                </div>
            </div>
            <div className="feedback">
                {ast.error}
            </div>
        </div>
    );
}

export default Application;
