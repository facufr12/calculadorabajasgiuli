function calculateResult() {
    const pathology = document.getElementById("pathology").value;
    const consumption = document.querySelector('input[name="consumption"]:checked').value;
    const capitas = parseInt(document.getElementById("capitas").value);
    const ageRange = document.querySelector('input[name="ageRange"]:checked').value;

    let result = "";

    // Condiciones para epilepsia
    if (pathology === "epilepsia") {
        if (consumption === "no") {
            if (capitas >= 2 && ageRange === "over65") {
                result = "Chequear con Fidelización";
            } else if (capitas === 1 && ageRange === "over65") {
                result = "Chequear con Fidelización";
            } else if (capitas === 1 && ageRange === "under65") {
                result = "GC";
            }
        } else { // Con consumo
            if (capitas === 1 && ageRange === "over65") {
                result = "GM";
            } else if (capitas >= 2) {
                result = "Chequear con Fidelización";
            } else if (capitas === 1 && ageRange === "under65") {
                result = "GM";
            }
        }
    }

    // Condiciones para estudios neurológicos en pediátricos
    else if (pathology === "neurologicos") {
        if (consumption === "no") {
            if (capitas >= 2 && ageRange === "under65") {
                result = "GC";
            } else if (capitas >= 2 && ageRange === "over65") {
                result = "GC";
            } else if (capitas === 1 && ageRange === "under65") {
                result = "GC";
            } else if (capitas === 1 && ageRange === "over65") {
                result = "GC";
            }
        } else { // Con consumo
            if (capitas >= 1) {
                result = "GM";
            }
        }
    }

    // Condiciones para enfermedades cardíacas
    else if (pathology === "cardiacas") {
        if (consumption === "no") {
            if (capitas === 1 && ageRange === "under65") {
                result = "GC"; // Sin consumo, 1 cápita, menor a 65
            } else if (capitas === 1 && ageRange === "over65") {
                result = "Chequear con Fidelización"; // Sin consumo, 1 cápita, mayor a 65
            } else if (capitas >= 2 && ageRange === "over65") {
                result = "GC"; // Sin consumo, 2 o más cápitas, mayor a 65 (ajustar según necesidad)
            } else if (capitas >= 2 && ageRange === "under65") {
                result = "GC"; // Sin consumo, 2 o más cápitas, menor a 65
            }
        } else { // Con consumo
            if (capitas === 1) {
                result = "GM"; // Con consumo, 1 cápita
            } else if (capitas >= 2) {
                result = "Chequear con Fidelización"; // Con consumo, 2 o más cápitas
            }
        }
    }

    // Condiciones para pacientes psiquiátricos
    else if (pathology === "psiquiatrico") {
        if (consumption === "no") {
            if (capitas >= 1) {
                result = "GC";
            }
        } else { // Con consumo
            if (capitas === 1) {
                if (ageRange === "under65") {
                    result = "Chequear con Fidelización";
                } else {
                    result = "GM";
                }
            } else if (capitas >= 2 && ageRange === "under65") {
                result = "GC";
            } else if (capitas >= 2 && ageRange === "over65") {
                result = "Chequear con Fidelización";
            }
        }
    }

    // Otras patologías
    else if (["diabetes", "oncológicas", "trasplantados", "artritis", "hiv"].includes(pathology)) {
        result = "GM";
    } else if (pathology === "obesidad" && consumption === "yes") {
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
