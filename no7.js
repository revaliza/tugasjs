const nama = [`Dinar`, `DiNar`, `dinAR`, `dINar`, `Dinar`]
const filter = nama.filter (item => {
    return item == "Dinar"
})
console.log(filter);