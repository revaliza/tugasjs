let nama  = ["dinar", "reva", "fira", "yumi", "rara"];
let cari = "rara";

function cariNama(nama, cari) {
    for (var i = 0; i < nama.length; i++){
        if (cari == nama [i]) {
            console.log(` ${nama[i]} kelas: XI RPL 1`);
        }
    }
}
cariNama(nama, cari);