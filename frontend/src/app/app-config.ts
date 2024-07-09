export class DefaultConfig {
  public static Application = {
    appName: "BaSO", // set Application name
  };
  public static config = {
    layout: "vertical", // vertical, horizontal
    subLayout: "", // horizontal-2
    collapseMenu: false,
    layoutType: "menu-light", // menu-dark, menu-light, dark
    headerBackColor: "background-grd-telu", // background-blue, background-red, background-purple, background-info, background-dark
    rtlLayout: false,
    navFixedLayout: true,
    headerFixedLayout: false,
    boxLayout: false,
    breadcumb: true,
  };
  public static lang = {
    defaultLang: "id", // set default languange for all component
  };
  public static letter = {
    commonLetterType: [
      "SURAT PEMBERITAHUAN",
      "SURAT JAWABAN",
      "SURAT PERMINTAAN",
      "SURAT PENAWARAN",
      "SURAT PANGGILAN",
      "SURAT PESANAN",
      "SURAT PENGIRIMAN",
      "SURAT PENGANTAR",
      "SURAT KELUAR UMUM",
      "SURAT UNDANGAN",
      "SURAT PERTEMUAN RAPAT",
      2,
      5,
      6,
      7,
      10,
      11,
      12,
      13,
      15,
      14,
      4,
    ],
    uncommonLetterType: [
      "SURAT PERINGATAN",
      "SURAT PERNYATAAN",
      "SURAT PERINTAH",
      "SURAT LAPORAN",
      "SURAT TUGAS",
      "SURAT KUASA",
      "SURAT KETERANGAN",
      3,
      19,
      8,
      9,
      18,
      17,
      16,
    ],
  };
}
