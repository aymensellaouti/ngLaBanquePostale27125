import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './commInterCompo/pere/pere.component';
import { FilsComponent } from './commInterCompo/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemCvComponent } from './cv/item-cv/item-cv.component';
import { CardCvComponent } from './cv/card-cv/card-cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { TodoComponent } from './todo/todo/todo.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { Btc2UsdPipe } from './pipes/btc2-usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { SayHelloService } from './services/say-hello.service';

@NgModule({
  declarations: [
    // j'ai un nouveau composant qui m'appartien et c'est le firstComponent
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemCvComponent,
    CardCvComponent,
    NgstyleComponent,
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    TodoComponent,
    DetailsCvComponent,
    EmbaucheComponent,
    WeekTodoComponent,
    Btc2UsdPipe,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
