function mostrarModal(mensaje) {
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");
    modalText.textContent = mensaje;
    modal.style.display = "block";
  }
  
  function cerrarModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  function validarContraseña() {
    const contrasena = document.getElementById("Contraseña").value;
    const regexMayusculas = /[A-Z]/g;
    const regexNumeros = /[0-9]/g;
    const regexTresConsecutivos = /\d{3}/;
    const regexSimbolos = /[^a-zA-Z0-9]/;
  
    if (contrasena.length < 8) {
      mostrarModal("La contraseña debe tener al menos 8 caracteres.");
    } else if ((contrasena.match(regexMayusculas) || []).length < 2) {
      mostrarModal("La contraseña debe contener al menos 2 letras mayúsculas.");
    } else if ((contrasena.match(regexNumeros) || []).length < 4) {
      mostrarModal("La contraseña debe contener al menos 4 números.");
    } else if (regexTresConsecutivos.test(contrasena)) {
      mostrarModal("La contraseña no puede tener 3 números consecutivos.");
    } else if (!regexSimbolos.test(contrasena)) {
      mostrarModal("La contraseña debe contener al menos 1 símbolo.");
    } else {
      mostrarModal("La contraseña es válida.");
      window.location.href = "Trabajo_final.html";
    }
  }
  
  
  