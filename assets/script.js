let skorPemain = 0;
let skorKomputer = 0;
const bunyiMenang = document.getElementById('bunyiMenang');
const bunyiKalah = document.getElementById('bunyiKalah');
const bunyiSeri = document.getElementById('bunyiSeri');

function main(pilihanPemain) {
    const pilihan = ['Gunting', 'Batu', 'Kertas'];
    const pilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)];

    let keputusan = '';

    if (pilihanPemain === pilihanKomputer){
        keputusan = `Pemainan seri! Anda berdua memilih ${pilihanPemain}.`;
        bunyiSeri.play();
    } else if (
        (pilihanPemain === 'Batu' && pilihanKomputer == 'Gunting') ||
        (pilihanPemain === 'Kertas' && pilihanKomputer == 'Batu') ||
        (pilihanPemain === 'Gunting' && pilihanKomputer == 'Kertas')
    ) {
        keputusan = `Anda menang! ${pilihanPemain} mengalahkan ${pilihanKomputer}.`;
        skorPemain++;
        bunyiMenang.play();
    } else {
        keputusan = `Anda kalah :( ${pilihanKomputer} mengalahkan ${pilihanPemain}.`;
        skorKomputer++;
        bunyiKalah.play();
    }

    document.getElementById('keputusan').textContent = keputusan;
    document.getElementById('skorPemain').textContent = skorPemain;
    document.getElementById('skorKomputer').textContent = skorKomputer;

    document.getElementById('setSemulaPermainan').style.display = 'inline-block';
}

function setSemulaPermainan (){
    document.getElementById('keputusan').textContent = '';
    document.getElementById('setSemulaPermainan').style.display = 'none';

    skorPemain = 0;
    skorKomputer = 0;

    document.getElementById('skorPemain').textContent = skorPemain;
    document.getElementById('skorKomputer').textContent = skorKomputer;

}



