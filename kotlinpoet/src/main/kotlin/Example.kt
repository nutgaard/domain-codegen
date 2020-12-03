package no.nav.sbl.dialogarena.modiabrukerdialog.api

import no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen.DomainCodegen
import no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen.generator.KotlinGenerator
import java.io.File

fun main() {
    val schema = File("kotlinpoet/src/main/resources/api.schema")
    val file = File("kotlinpoet/src/main/resources/api-ast.json")
    val content = DomainCodegen.readFile(file)
    val ast = DomainCodegen.parse(content)
    val ast2 = DomainCodegen.compile(DomainCodegen.readFile(schema))

    val ktFile = DomainCodegen.generate(ast, KotlinGenerator("", "Example.kt"))
    val ktFile2 = DomainCodegen.generate(ast2, KotlinGenerator("", "Example.kt"))

    println(ktFile)
    println(ktFile2)
}
