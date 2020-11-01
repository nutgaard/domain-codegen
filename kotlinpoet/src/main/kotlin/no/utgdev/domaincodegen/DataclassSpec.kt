package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen

import com.squareup.kotlinpoet.*

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

