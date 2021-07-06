import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CreateConfigComponent} from "../create-config/create-config.component";
import {FormControl} from "@angular/forms";
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.css']
})
export class ConfigTableComponent implements OnInit {
  selected = 'domain';
  configList: any[] = [];
  selectedBet: string = 'bet1';
  displayedColumns: string[] = ['configName', 'home', 'favourite', 'sportsBook','preGame','minGameTime','below','above','percentage'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator  = paginator;
  }

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(private configService: ConfigService,public matDialog: MatDialog) {
    this.configList = configService.getAllConfigs();
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.configList);
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(CreateConfigComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  applyFilter(filterValue: KeyboardEvent) {
    let value = (filterValue.target as HTMLTextAreaElement).value;
    console.log(value);
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = value;
  }

  selectChange() {
    console.log("bet changed", this.selectedBet);
    if(this.selectedBet === 'bet1') {
      this.displayedColumns = ['configName', 'home', 'favourite', 'sportsBook','preGame','minGameTime','below','above','percentage'];
    } else {
      this.displayedColumns = ['configName', 'sportsBook', 'preGame', 'minGameTime', 'below','above','percentage', 'referenceLine', 'range', 'period', 'recoveryMargin'];
    }
  }

}
export interface PeriodicElement {
  configName: string;
  home: boolean;
  favorite: boolean;
  sportsBook: string;
  preGame: boolean;
  minGameTime:number;
  below:number;
  above:number;
  percentage:string;
}
