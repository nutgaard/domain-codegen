package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen

import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.FileSpec
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import com.squareup.kotlinpoet.TypeName
import com.squareup.kotlinpoet.TypeSpec
import java.lang.StringBuilder

class KotlinGenerator(
        private val packageName: String,
        private val filename: String
) : Generator {
    override fun generate(ast: AST.Root): String {
        val file = FileSpec.builder(packageName, filename)

        for (definition in ast) {
            file.addType(createDataClass(packageName, definition))
        }

        val sb = StringBuilder()
        file.build().writeTo(sb)
        return sb.toString()
    }

    private fun getType(packageName: String, field: AST.Field): TypeName {
        val basetype: ClassName = if (field.primitive)
            AST.typemap[field.type] ?: error("No typemap for primitive ${field.type}")
        else
            ClassName(packageName, field.type)

        return basetype
                .run {
                    if (field.generics.isNotEmpty())
                        this.parameterizedBy(field.generics.map { getType(packageName, it) })
                    else this
                }
                .copy(nullable = field.nullable)
    }

    private fun createDataClass(packageName: String, definition: AST.Definition): TypeSpec {
        val cls = DataclassSpec(definition.identifier)

        for (field in definition.fields) {
            cls.addParameter(field.field, getType(packageName, field))
        }

        return cls.build()
    }
}
