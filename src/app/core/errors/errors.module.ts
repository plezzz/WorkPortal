import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalErrorHandler } from "./global-error-handler";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },

  ]
})
export class ErrorHandlerModule {}
