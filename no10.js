const NamaArray = [
    {Nama: `Reva`, Kelas:`XI RPL 1`},
    {Nama: `Din`, Kelas:`XI RPL 2`},
    {Nama: `Yumi`, Kelas:`XI RPL 1`},
    {Nama: `Rara`, Kelas:`XI RPL 3`},
    {Nama: `Fira`, Kelas:`XI RPL 2`},
    {Nama: `Wony`, Kelas:`XI RPL 3`},
    {Nama: `Kebin`, Kelas:`XI RPL 1`},
    {Nama: `Jeff`, Kelas:`XI RPL 1`},
    {Nama: `Winwin`, Kelas:`XI RPL 1`},
    {Nama: `Eric`, Kelas:`XI RPL 1`},
]

console.log(`Search Kelas;`);
function NamaFilter() {
    const filter = NamaArray.filter (itemfilter => {
        return itemfilter.Kelas == 'XI RPL 1';
    });
    console.log(filter);
}
NamaFilter();