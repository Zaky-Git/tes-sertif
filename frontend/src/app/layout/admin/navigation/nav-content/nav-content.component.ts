import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

import { BroadcasterService } from "src/app/_services/broadcaster.service";
import { DefaultConfig } from "src/app/app-config";
import { Location } from "@angular/common";
import { environment } from "src/environments/environment";

const DevMode: boolean = environment.development;

@Component({
  selector: "app-nav-content",
  templateUrl: "./nav-content.component.html",
  styleUrls: ["./nav-content.component.scss"],
})
export class NavContentComponent  {
  public isAdmin: boolean = false;
  public userProfile: any;
  public nextConfig: any;
  public navigation: any;
  public prevDisabled: string;
  public nextDisabled: string;
  public contentWidth: number;
  public wrapperWidth: any;
  public scrollWidth: any;
  public windowWidth: number;
  public isNavProfile: boolean;
  public token: string;

  @Output() NavMobCollapse = new EventEmitter();

  @ViewChild("navbarContent", { static: false }) navbarContent: ElementRef;
  @ViewChild("navbarWrapper", { static: false }) navbarWrapper: ElementRef;

  constructor(
    private broadcasterService: BroadcasterService,
    private location: Location,
    private zone: NgZone
  ) {
    broadcasterService.hideProfileMenuBroadcast$.subscribe((res) => {
      this.isNavProfile = false;
    });
    this.nextConfig = DefaultConfig.config;
    this.windowWidth = window.innerWidth;

    // this.navigation = this.nav.get();
    this.navigation = [];
    this.prevDisabled = "disabled";
    this.nextDisabled = "";
    this.scrollWidth = 0;
    this.contentWidth = 0;
    this.userProfile = {
      fullname: "Loading...",
      numberid: "Loading...",
      photo: "assets/images/infinity-situ.svg",
    };
    this.isNavProfile = false;
  }



}
