import "rxjs/add/operator/filter";

import { Component, Input, OnInit } from "@angular/core";

import { BroadcasterService } from "src/app/_services/broadcaster.service";
import { DefaultConfig } from "src/app/app-config";
import { NavigationItem } from "src/app/layout/admin/navigation/navigation";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
