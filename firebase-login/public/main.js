function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            printUserInfo(user.email, user.uid);
            log(`ログインしました。: ${user.uid}`);
            disableSignUpAndSignIn();
        } else {
            clearUserInfo();
            disableSignOut();
        }
        clearForm();
    });
}

initApp();

function printUserInfo(email, uid) {
    document.getElementById(
        "userinfo"
    ).innerHTML = `<p>Email: ${email}</p><p>UID: ${uid}</p>`;
}

function clearUserInfo() {
    document.getElementById("userinfo").innerHTML = `<p>未ログイン</p>`;
}

function disableSignUpAndSignIn(login) {
    document.getElementById("sign-up").disabled = true;
    document.getElementById("sign-in").disabled = true;
    document.getElementById("sign-out").disabled = false;
    document.getElementById("email").disabled = true;
    document.getElementById("password").disabled = true;
}

function disableSignOut() {
    document.getElementById("sign-up").disabled = false;
    document.getElementById("sign-in").disabled = false;
    signOut = document.getElementById("sign-out").disabled = true;
    email = document.getElementById("email").disabled = false;
    password = document.getElementById("password").disabled = false;
}

function clearForm() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

onSignUpButtonClicked = function() {
    const email = getEmail();
    const password = getPassword();

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function() {
            log(`サインアップしました。: ${email}`);
        })
        .catch(function(error) {
            log(`サインアップできませんでした。${error}`);
        });
};

onSignInButtonClicked = function() {
    const email = getEmail();
    const password = getPassword();

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            log(`ログインできませんでした。${error}`);
        });
};

function getEmail() {
    return document.getElementById("email").value;
}

function getPassword() {
    return document.getElementById("password").value;
}

onSignOutButtonClicked = function() {
    firebase
        .auth()
        .signOut()
        .then(function() {
            log("ログアウトしました。");
        })
        .catch(function(error) {
            log(`ログアウトできませんでした。${error}`);
        });
};

function log(msg) {
    document.getElementById("log").innerText += `${msg}\n`;
}
