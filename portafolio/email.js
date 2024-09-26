if (location.search.length > 0) {
    const params = new URLSearchParams(window.location.search)
    let asunto = params.get("asunto")
    let mensaje = params.get("mensaje")

    location.href = "mailto:jlin031@g.educaand.es?subject="+encodeURI(asunto)+"&body="+encodeURI(mensaje)
}
