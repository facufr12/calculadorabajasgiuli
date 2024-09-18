function calculateResult() {
    const pathology = document.getElementById("pathology").value;
    const consumption = document.querySelector('input[name="consumption"]:checked').value;
    const capitas = parseInt(document.getElementById("capitas").value);
    const ageRange = document.querySelector('input[name="ageRange"]:checked').value;

    let result = "";

    if (["diabetes", "epilepsia", "oncológicas", "trasplantados", "artritis", "hiv", "cardiacas"].includes(pathology)) {
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
    } else if (["celiaquia", "psiquiátricos", "judicializados", "neurológicos"].includes(pathology)) {
        if (consumption === "no" && capitas > 1 && ageRange === "under65") {
            result = "GC";
        } else if (consumption === "yes") {
            result = "GM";
        }
    } else {
        result = "GC";
    }

    document.getElementById("result").innerText = result;
}
