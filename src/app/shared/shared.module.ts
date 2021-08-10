import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideNavToolbarComponent } from './layouts/side-nav-toolbar/side-nav-toolbar.component';
import { SingleCardComponent } from './layouts/single-card/single-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { DevexpressComponentsModule } from './devexpress-components/devexpress-components.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SideNavToolbarComponent,
    SingleCardComponent,
    HeaderComponent,
    SidebarNavigationComponent,
    FooterComponent
  ],
  imports: [CommonModule, DevexpressComponentsModule],
  exports: [
    PageNotFoundComponent,
    SideNavToolbarComponent,
    SingleCardComponent,
    HeaderComponent,
    SidebarNavigationComponent,
    FooterComponent
  ],
})
export class SharedModule {}
