package no.nav.sbl.dialogarena.modiabrukerdialog.api.no.utgdev.domaincodegen

interface Generator {
    fun generate(ast: AST.Root): String
}
