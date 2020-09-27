import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { ZeroPaddingPipe } from './shared/pipes/zero-padding.pipe';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { ParentComponent } from './features/component-interaction/parent/parent.component';
import { ChildComponent } from './features/component-interaction/parent/child/child.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { CrudComponent } from './features/crud/crud.component';
import { ListUserComponent } from './features/crud/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    DataBindingComponent,
    EventBindingComponent,
    BuiltInDirectivesComponent,
    CustomPipesComponent,
    ZeroPaddingPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ComponentInteractionComponent,
    ParentComponent,
    ChildComponent,
    NotificationsComponent,
    CrudComponent,
    ListUserComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
