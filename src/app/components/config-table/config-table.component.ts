import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CreateConfigComponent} from "../create-config/create-config.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.css']
})
export class ConfigTableComponent implements OnInit {
  selected = 'domain';
  displayedColumns: string[] = ['configName', 'home', 'favorite', 'sportsBook','preGame','minGameTime','below','above','percentage'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator  = paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  constructor(public matDialog: MatDialog) {

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

const ELEMENT_DATA: PeriodicElement[] = [
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'H' ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'He' ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Li' ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Be' ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'B'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'C'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'N'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'O'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'F'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Ne'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Na'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Mg'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Al'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Si'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'P'   ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'S'   ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Cl'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Ar'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'K'   ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
  {configName:'Test Config', home: true, favorite: true, sportsBook: 'Ca'  ,preGame:true,minGameTime:12000,below:80,above:30,percentage:'68%'},
]
