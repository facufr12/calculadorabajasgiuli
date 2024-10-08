function calculateResult() {
  const pathology = document.getElementById("pathology").value;
  const consumption = document.querySelector(
    'input[name="consumption"]:checked'
  );
  const capitasInput = document.getElementById("capitas");
  const ageRange = document.querySelector('input[name="ageRange"]:checked');

  // Validar si todos los campos requeridos están llenos
  if (!pathology || !consumption || !capitasInput.value || !ageRange) {
    alert("Por favor, completa todos los campos.");
    return; // Salir de la función si falta información
  }

  const consumptionValue = consumption.value;
  const capitas = parseInt(capitasInput.value);
  let result = "";

  // Condiciones para epilepsia
  if (pathology === "epilepsia") {
    if (consumptionValue === "no") {
      if (capitas >= 2 && ageRange.value === "over65") {
        result = "Chequear con Fidelización";
      } else if (capitas === 1 && ageRange.value === "over65") {
        result = "Chequear con Fidelización";
      } else if (capitas === 1 && ageRange.value === "under65") {
        result = "GC";
      }
    } else {
      // Con consumo
      if (capitas === 1 && ageRange.value === "over65") {
        result = "GM";
      } else if (capitas >= 2) {
        result = "Chequear con Fidelización";
      } else if (capitas === 1 && ageRange.value === "under65") {
        result = "GM";
      }
    }
  }

  // Condiciones para estudios neurológicos en pediátricos
  else if (pathology === "neurológicos") {
    if (consumptionValue === "no") {
      if (capitas >= 2) {
        result = "GC";
      } else if (capitas === 1) {
        result = "GC";
      }
    } else {
      // Con consumo
      if (capitas >= 1) {
        result = "GM";
      }
    }
  }

  // Condiciones para enfermedades cardíacas
  else if (pathology === "cardiacas") {
    if (consumptionValue === "no") {
      if (capitas === 1 && ageRange.value === "under65") {
        result = "GC";
      } else if (capitas >= 2 && ageRange.value === "over65") {
        result = "GC";
      } else if (capitas === 1 && ageRange.value === "over65") {
        result = "Chequear con Fidelización"; // Nueva condición agregada
      }
    } else {
      // Con consumo
      if (capitas === 1) {
        if (ageRange.value === "under65") {
          result = "GM"; // Nueva condición agregada
        } else {
          // Mayor a 65
          result = "GM"; // Nueva condición agregada
        }
      } else if (capitas === 2) {
        if (ageRange.value === "under65") {
          result = "Chequear con Fidelización"; // Nueva condición agregada
        } else {
          // Mayor a 65
          result = "GM"; // Nueva condición agregada
        }
      }
    }
  }
// Condiciones para pacientes psiquiátricos
else if (pathology === "psiquiatrico") {
    if (consumptionValue === "no") {
        // Pacientes psiquiátricos sin consumo
        if (capitas >= 1) {
            result = "GC"; // 1 o más cápitas: resultado "GC"
        }
        if (capitas >= 2 && ageRange.value === "over65") {
            result = "Chequear con Fidelización"; // 2 o más cápitas y mayor a 65: chequeo
        }
    } else {
        // Con consumo
        if (capitas === 1 && ageRange.value === "under65") {
            result = "Chequear con Fidelización"; // 1 cápita y menor de 65: chequeo
        } else if (capitas === 1 && ageRange.value === "over65") {
            result = "GM"; // Paciente psiquiátrico con consumo, 1 cápita, mayor a 65
        } else if (capitas >= 2 && ageRange.value === "under65") {
            result = "GC"; // 2 o más cápitas y menor de 65: resultado "GC"
        } else if (capitas >= 1 && ageRange.value === "over65") {
            result = "GM"; // 1 o más cápitas y mayor de 65: resultado "GM"
        }
    }
}

// Nueva condición añadida
if (pathology === "psiquiatrico" && consumptionValue === "no" && capitas > 1 && ageRange.value === "over65") {
    result = "GC"; // Pacientes psiquiátricos sin consumo, 1 o más cápitas y mayor de 65: resultado "GC"
}

  // Otras patologías
  else if (
    ["diabetes", "oncológicas", "trasplantados", "artritis", "hiv"].includes(
      pathology
    )
  ) {
    result = "GM";
  } else if (pathology === "obesidad" && consumptionValue === "yes") {
    result = "GM";
  } else if (pathology === "osteoporosis") {
    if (capitas > 1) {
      result = "GC";
    } else {
      result = "Chequear con Fidelización";
    }
  } else if (pathology === "cud") {
    result = "GM";
  } else {
    result = "GC";
  }

  document.getElementById("result").innerText = result;
}
