package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen

import com.fasterxml.jackson.module.kotlin.readValue
import java.nio.file.Files
import java.nio.file.Paths
import javax.script.Invocable
import javax.script.ScriptEngineManager


internal object Compiler {
    val engine = ScriptEngineManager().getEngineByName("graal.js")

    init {
        val pegGrammar = Paths.get(Compiler::class.java.getResource("/parser.js").toURI())
        Files.newBufferedReader(pegGrammar).use { engine.eval(it) }
    }

    fun compile(source: String): AST.Root {
        val json = (engine as Invocable).invokeFunction("parse", source)
        return DomainCodegen.mapper.readValue(json as String)
    }
}
