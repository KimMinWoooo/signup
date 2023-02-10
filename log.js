function checking() {
    let passw = document.getElementById("passw").value
    let passcheck = document.getElementById("passw").value

    if (passw !== passcheck) {
        document.getElementById("passwError").innerHTML = ""
        document.getElementById("passcheckError").innerHTML = "비밀번호가 동일하지 않습니다."
        check = false
    } else {
        document.getElementById("passwError").innerHTML = ""
        document.getElementById("passcheckError").innerHTML = ""
    }

    if (passw === "") {
        document.getElementById("passwError").innerHTML = "비밀번호를 입력해주세요."
        check = false
    }
    
    if (passcheck === "") {
        document.getElementById("passcheckError").innerHTML = "비밀번호를 다시 입력해주세요."
        check = false
    } 
}


