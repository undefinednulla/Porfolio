let isDark = false
document.getElementById('modeColor').addEventListener('click', () => {
    if (!isDark) {
        document.documentElement.style.setProperty("--text-dark", "#FFFFFF")
        document.documentElement.style.setProperty("--background-light", "#292c35")
        document.documentElement.style.setProperty("--background-light-gray", "#22252d")
        document.documentElement.style.setProperty("--background-gray", "#22252d")
        document.documentElement.style.setProperty("--gray", "#333641")
        document.documentElement.style.setProperty("--text-dark", "#FFFFFF")
        document.getElementById('modeColor').innerHTML = `<button class="button--20 button--secondary" ><img src="./assets/images/navication/moon.svg" alt=""></button>`
        return isDark = true;
    }
    if (isDark) {
        document.documentElement.style.setProperty("--text-dark", "#FFFFFF")
        document.documentElement.style.setProperty("--background-light", "#fff")
        document.documentElement.style.setProperty("--background-light-gray", "#F5F6FA")
        document.documentElement.style.setProperty("--background-gray", "#fff")
        document.documentElement.style.setProperty("--gray", "#f5f6fa")
        document.documentElement.style.setProperty("--text-dark", "#333333")
        document.getElementById('modeColor').innerHTML = `<button class="button--20 button--secondary"><img src="./assets/images/navication/sun.svg" alt=""></button>`
        return isDark = false;
    }
})

// const modeColorDark = () => {
//     document.getElementById('modeColorLight').addEventListener('click', () => {
//         document.documentElement.style.setProperty("--text-dark", "#FFFFFF")
//         document.documentElement.style.setProperty("--background-light", "#292c35")
//         document.documentElement.style.setProperty("--background-light-gray", "#22252d")
//         document.documentElement.style.setProperty("--text-dark", "#FFFFFF")
//         document.getElementById('modeColor').innerHTML = `<button class="button--20 button--secondary" id="modeColorDark"><img src="./assets/images/navication/moon.svg" alt=""></button>`
//     })
//     isDark = true
// }