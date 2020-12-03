package no.nav.sbl.dialogarena.modiabrukerdialog.api

import kotlin.String

public abstract class KundeBase internal constructor() {
    abstract val id: String?
}

public data class Kunde(public override val id: String?) : KundeBase()
public data class AwesomeKunde(public override val id: String?, public val awesome: Boolean) : KundeBase()

fun main() {
    val k = Kunde("Skjer a")
    val ak = AwesomeKunde("id", true)

    println(k)
    println(ak)
}
