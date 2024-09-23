function calculateResult() {
    const pathology = document.getElementById("pathology").value;
    const consumption = document.querySelector('input[name="consumption"]:checked').value;
    const capitas = parseInt(document.getElementById("capitas").value);
    const ageRange = document.querySelector('input[name="ageRange"]:checked').value;

    let result = "";

    // Patologías con GM
    if (["diabetes", "oncológicas", "trasplantados", "artritis", "hiv"].includes(pathology)) {
        result = "GM";
    } else if (pathology === "obesidad" && consumption === "yes") {
        result = "GM";
    } else if (pathology === "osteoporosis") {
        if (capitas > 1) {
            result = "GC";
        } else {
            result = "CHEQUEAR CON EQUIPO DE FIDELIZACION";
        }
    } else if (pathology === "cud") {
        result = "GM"; // CUD tiene que ser siempre GM
    } else if (["celiaquia", "psiquiátricos", "judicializados", "neurológicos"].includes(pathology)) {
        if (pathology === "celiaquia") {
            if (consumption === "no" && capitas > 2 && ageRange === "under65") {
                result = "GC";
            } else if (consumption === "no" && capitas >= 1 && ageRange === "over65") { 
                result = "GC";
            } else if (consumption === "yes" && capitas >= 1) {
                result = "CHEQUEAR CON FIDELIZACION"; 
            }
        } else if (pathology === "epilepsia") {
            if (consumption === "no" && capitas >= 1) {
                result = "GC"; 
            } else if (consumption === "yes") {
                result = "GM";
            }
        } else if (pathology === "neurológicos") {
            if (consumption === "no" && capitas === 1 && ageRange === "under65") {
                result = "CHEQUEAR CON FIDELIZACION";
            } else if (consumption === "yes" && capitas >= 1) {
                result = "GM";
            }
        } else if (pathology === "psiquiátricos" && consumption === "no" && capitas === 1 && ageRange === "under65") {
            result = "GC"; 
        } else if (pathology === "judicializados") {
            if (consumption === "no" && capitas >= 1) {
                result = "GM"; 
            } else {
                result = "GM"; 
            }
        }
    } else if (pathology === "cardiacas") {
        if (consumption === "no" && capitas > 2 && ageRange === "under65") {
            result = "GC"; // Nueva condición para enfermedad cardiaca
        } else {
            result = "GM"; // En otras condiciones, enfermedad cardiaca es GM
        }
    } else {
        result = "GC";
    }

    document.getElementById("result").innerText = result;
}
