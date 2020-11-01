package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen

import com.squareup.kotlinpoet.*
import java.util.*

object AST {
    open class Field(
            val type: String,
            val primitive: Boolean,
            val nullable: Boolean,
            val generics: List<Field>
    )

    class PropertyField(
            val field: String,
            val mutable: Boolean,
            type: String,
            primitive: Boolean,
            nullable: Boolean,
            generics: List<Field>
    ) : Field(type, primitive, nullable, generics)

    data class Definition(
            val identifier: String,
            val fields: List<PropertyField>
    )

    class Root : LinkedList<Definition>()

    val typemap = mapOf(
            "String" to STRING,
            "Long" to LONG,
            "Int" to INT,
            "Short" to SHORT,
            "Byte" to BYTE,
            "Double" to DOUBLE,
            "Float" to FLOAT,
            "Boolean" to BOOLEAN,
            "Array" to LIST,
            "Map" to MAP
    )
}
