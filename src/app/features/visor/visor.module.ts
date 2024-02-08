import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisorRoutingModule } from './visor-routing.module';
import { Layout1Component } from './components/layouts/layout1/layout1.component';
import { VisorHeaderComponent } from './components/visor-header/visor-header.component';
import { VisorMapComponent } from './components/visor-map/visor-map.component';
import { VisorNotificationsComponent } from './components/visor-notifications/visor-notifications.component';
import { DragZoomComponent } from './components/layouts/widgets/drag-zoom/drag-zoom.component';
import { HomeExtentComponent } from './components/layouts/widgets/home-extent/home-extent.component';
import { OverviewMapComponent } from './components/layouts/widgets/overview-map/overview-map.component';
import { ZoomInComponent } from './components/layouts/widgets/zoom-in/zoom-in.component';
import { ZoomOutComponent } from './components/layouts/widgets/zoom-out/zoom-out.component';
import { GeolocatorComponent } from './components/layouts/widgets/geolocator/geolocator.component';
import { VisorSidebarComponent } from './components/visor-sidebar/visor-sidebar.component';
import { VisorSidebarTabComponent } from './components/visor-sidebar-tab/visor-sidebar-tab.component';
import { VisorSidebarTabNoTemplateComponent } from './components/visor-sidebar-tab-no-template/visor-sidebar-tab-no-template.component';
import { LeyendComponent } from './components/visor-sidebar/leyend/leyend.component';
import { TocComponent } from './components/visor-sidebar/toc/toc.component';
import { ServicesTreeComponent } from './components/visor-sidebar/services-tree/services-tree.component';


@NgModule({
  declarations: [
    Layout1Component,
    VisorHeaderComponent,
    VisorMapComponent,
    VisorNotificationsComponent,
    DragZoomComponent,
    HomeExtentComponent,
    OverviewMapComponent,
    ZoomInComponent,
    ZoomOutComponent,
    GeolocatorComponent,
    VisorSidebarComponent,
    VisorSidebarTabComponent,
    VisorSidebarTabNoTemplateComponent,
    LeyendComponent,
    TocComponent,
    ServicesTreeComponent
  ],
  imports: [
    CommonModule,
    VisorRoutingModule
  ]
})
export class VisorModule { }
