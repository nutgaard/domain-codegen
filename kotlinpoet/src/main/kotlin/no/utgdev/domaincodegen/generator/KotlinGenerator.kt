package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen.generator

import com.squareup.kotlinpoet.*
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen.AST
import no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen.Generator

internal class DataclassSpec(identifier: String) {
    private val type = TypeSpec
            .classBuilder(identifier)
            .addModifiers(KModifier.DATA)
    private val ctor = FunSpec.constructorBuilder()

    fun addParameter(identifier: String, typename: TypeName) {
        ctor.addParameter(ParameterSpec(identifier, typename))
        type.addProperty(PropertySpec.builder(identifier, typename).initializer(identifier).build())
    }

    fun build(): TypeSpec {
        return type.primaryConstructor(ctor.build()).build()
    }
}

class KotlinGenerator(
        private val packageName: String,
        private val filename: String
) : Generator {
    override fun generate(ast: AST.Root): String {
        val file = FileSpec.builder(packageName, filename)

        for (definition in ast) {
            file.addType(createDataClass(packageName, definition))
        }

        return file.build().toString()
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
