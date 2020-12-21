document.getElementById("password_change_submit").onclick = function checkPassword() {
        var oldPassword = $("#oldPassword").val();
        var newPass = $("#newPassword").val();
        var confirmPass = $("#confirmPassword").val();
        if (oldPassword=="") {
            alert("输入的原密码为空");
            return false;
        } else if (newPass=="" || confirmPass=="") {
            alert("输入的新密码为空");
            return false;
        } else if (newPass != confirmPass) {
            alert("两次输入的密码不一致");
            return false;
        }
        return true;
    }