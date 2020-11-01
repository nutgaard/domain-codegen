package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import java.io.File
import java.nio.charset.Charset
import java.nio.file.Files

class DomainCodegen {
    companion object {
        private val UTF8 = Charset.forName("UTF-8")
        val mapper = jacksonObjectMapper()

        fun readFile(file: File): String = Files.readString(file.toPath(), UTF8)
        fun compile(source: String): AST.Root = Compiler.compile(source)
        fun parse(content: String): AST.Root = mapper.readValue(content)

        fun generate(ast: AST.Root, generator: Generator): String {
            return generator.generate(ast)
        }
    }
}
