function calculateResult() {
    const pathology = document.getElementById("pathology").value;
    const consumption = document.querySelector('input[name="consumption"]:checked').value;
    const capitas = parseInt(document.getElementById("capitas").value);
    const ageRange = document.querySelector('input[name="ageRange"]:checked').value;

    let result = "";

    // Condiciones para epilepsia
    if (pathology === "epilepsia") {
        if (consumption === "yes" && capitas >= 2 && ageRange === "under65") {
            result = "CHEQUEAR CON FIDELIZACION";
        } else if (consumption === "yes" && capitas >= 1 && ageRange === "under65") {
            result = "GM";
        } else if (consumption === "yes" && capitas >= 2) {
            result = "CHEQUEAR CON FIDELIZACION";
        } else if (consumption === "no" && capitas >= 2 && ageRange === "over65") {
            result = "CHEQUEAR CON FIDELIZACION";
        } else if (consumption === "yes" && capitas === 1 && ageRange === "over65") {
            result = "GM";
        } else if (consumption === "no" && capitas === 1 && ageRange === "over65") {
            result = "CHEQUEAR CON FIDELIZACION";
        } else if (consumption === "no" && capitas === 1 && ageRange === "under65") {
            result = "GC";
        }
    }

    // Condiciones para pacientes psiquiátricos
    else if (pathology === "psiquiatrico") {
        if (consumption === "yes" && capitas >= 1 && ageRange === "over65") {
            result = "GM";
        } else if (consumption === "yes" && capitas >= 1 && ageRange === "under65") {
            result = "CHEQUEAR CON FIDELIZACION";
        }
    }

    // Condiciones para estudios neurológicos
    else if (pathology === "neurológicos") {
        if (consumption === "no" && capitas >= 2) {
            result = "GC";
        } else if (consumption === "yes" && capitas === 1 && ageRange === "under65") {
            result = "GM";
        } else if (consumption === "yes" && capitas === 1 && ageRange === "over65") {
            result = "GM";
        } else if (consumption === "no" && capitas === 1 && ageRange === "under65") {
            result = "GC";
        } else if (consumption === "no" && capitas === 1 && ageRange === "over65") {
            result = "GC";
        } else if (consumption === "no" && capitas >= 2 && ageRange === "under65") {
            result = "GC";
        } else if (consumption === "no" && capitas >= 2 && ageRange === "over65") {
            result = "GC";
        }
    }

    // Condiciones para enfermedades cardíacas
    else if (pathology === "cardiacas") {
        if (consumption === "no" && capitas === 1 && ageRange === "over65") {
            result = "CHEQUEAR CON FIDELIZACION";
        } else if (consumption === "yes" && capitas === 1 && ageRange === "over65") {
            result = "GM";
        } else if (consumption === "yes" && capitas === 1 && ageRange === "under65") {
            result = "GM";
        } else if (consumption === "yes" && capitas === 2 && ageRange === "over65") {
            result = "GM";
        } else if (consumption === "yes" && capitas === 2 && ageRange === "under65") {
            result = "CHEQUEAR CON FIDELIZACION";
        } else if (consumption === "no" && capitas >= 1 && ageRange === "under65") {
            result = "GC";
        } else if (consumption === "no" && capitas >= 2 && ageRange === "over65") {
            result = "GC";
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
            result = "CHEQUEAR CON EQUIPO DE FIDELIZACION";
        }
    } else if (pathology === "cud" && consumption === "no") {
        result = "CHEQUEAR CON FIDELIZACION";
    } else {
        result = "GC";
    }

    document.getElementById("result").innerText = result;
}
