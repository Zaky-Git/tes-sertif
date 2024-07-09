import { Injectable } from "@angular/core";

export interface NavigationItem {
  id: string;
  title: string;
  type: "item" | "collapse" | "group";
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const Admin = {
  id: 1,
  title: "ROOT.admin",
  type: "group",
  icon: "ti-home",
  children: [
    {
      id: "master-data-template",
      title: "ROOT.master_data_template",
      type: "item",
      url: "/admin/master-data-template",
      classes: "nav-item",
      icon: "ti-layout-list-thumb",
    },
    {
      id: "master-data-mitra-eksternal",
      title: "ROOT.master_data_external_partner",
      type: "item",
      url: "/admin/master-data-mitra-eksternal",
      classes: "nav-item",
      icon: "ti-id-badge",
    },

    {
      id: "master-data-kode-kegiatan",
      title: "ROOT.master_data_activity_code",
      type: "item",
      url: "/admin/master-data-kode-kegiatan",
      classes: "nav-item",
      icon: "fas fa-people-carry",
    },
    {
      id: "master-data-kode-pemilik-proses",
      title: "ROOT.master_data_process_owner_code",
      type: "item",
      url: "/admin/master-data-kode-pemilik-proses",
      classes: "nav-item",
      icon: "fas fa-building",
    },
  ],
};

const NavigationItems = [
  {
    id: 0,
    title: "HOME.dashboard",
    type: "group",
    icon: "ti-home",
    children: [
      {
        id: "home",
        title: "HOME.dashboard",
        type: "item",
        url: "/home",
        classes: "nav-item",
        icon: "ti-home",
      },
    ],
  },
  {
    id: 2,
    title: "ROOT.surat_online",
    type: "group",
    icon: "ti-home",
    children: [
      {
        id: "pembuatan-surat",
        title: "ROOT.letter_writing",
        type: "item",
        url: "/pembuatan-surat",
        classes: "nav-item",
        icon: "ti-write",
      },
      {
        id: "sirkulasi-surat",
        title: "ROOT.letter_circulation",
        type: "item",
        url: "/sirkulasi-surat",
        classes: "nav-item",
        icon: "ti-clipboard",
      },
      {
        id: "diseminasi-surat",
        title: "ROOT.letter_dissemination",
        type: "item",
        url: "/diseminasi-surat",
        classes: "nav-item",
        icon: "ti-agenda",
      },
    ],
  },
];

@Injectable()
export class NavigationItem {
  public items = [];
  constructor(
  ) {}

  public addOrReplace(item) {
    if (this.items.indexOf(item) === -1) {
      this.items.push(item);
      // NavigationItems[0]["children"].push(item);
      NavigationItems.push(item);
    }
  }

  public get() {

    NavigationItems.sort((a, b) => (a.id > b.id ? 1 : -1));

    return NavigationItems;
  }
}
