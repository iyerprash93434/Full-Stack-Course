const userEl = document.getElementsByName("username");
console.log(userEl);



function collectData() {

    const languageEl = document.getElementsByName("languageProficiency");
    console.log(languageEl);



    for (let i = 0; i < languageEl.length; i++) {

        if (languageEl[i].checked) {

            console.log(`Selected language is ${languageEl[i].value}`);

        }

    }

}