import { CrudComponent } from './features/crud/crud.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { AppComponent } from './app.component';
import { appRoutesNames } from './app.routes.names';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: appRoutesNames.TYPESCRIPT, component: TypescriptComponent},
  { path: appRoutesNames.DATA_BINDING, component: DataBindingComponent},
  { path: appRoutesNames.EVENT_BINDING, component: EventBindingComponent},
  { path: appRoutesNames.BUILT_IN_DIRECTIVES, component: BuiltInDirectivesComponent},
  { path: appRoutesNames.CUSTOM_PIPES, component: CustomPipesComponent},
  { path: appRoutesNames.TEMPLATE_DRIVEN, component: TemplateDrivenComponent},
  { path: appRoutesNames.MODEL_DRIVEN, component: ModelDrivenComponent},
  { path: appRoutesNames.COMPONENT_INTERACTION, component: ComponentInteractionComponent},
  { path: appRoutesNames.NOTIFICATIONS, component: NotificationsComponent},
  { path: appRoutesNames.CRUD, component: CrudComponent},
  { path: '', pathMatch: 'full', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
