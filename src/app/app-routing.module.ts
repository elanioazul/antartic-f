import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: "",
		redirectTo: "/visor",
		pathMatch: "full"
	},
  {
    path: "barrier",
    loadChildren: () =>
      import("./features/barrier/barrier.module")
  },
  {
		path: "visor",
		loadChildren: () =>
			import("./features/visor/visor.module")
	},
  {
    path: "**",
    loadChildren: () =>
      import("./features/visor/visor.module")
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
