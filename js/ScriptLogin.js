document.addEventListener("DOMContentLoaded", function () {
    const $visible = document.getElementById("visible"),
    $password = document.getElementById("password"),
    $submit = document.getElementById("submit"),
    $user = document.getElementById("usuario");

 
    $visible.addEventListener("change", function () {
        if ($visible.checked) {
            // Si el checkbox está marcado, muestra la contraseña
            $password.type = "text";
        } else {
            // Si el checkbox no está marcado, oculta la contraseña
            $password.type = "password";
        }
    });
});