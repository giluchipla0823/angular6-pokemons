import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSpeciesColorType]'
})
export class SpeciesColorTypeDirective{
  	@Input('appSpeciesColorType') type: string;

	constructor(private el: ElementRef) {}

	ngAfterViewInit(){
		let className = 'badge-default';

		if(this.type === 'poison'){
	  		className = 'badge-warning';
	  	}else if(this.type === 'water'){
	  		className = 'badge-info';
	  	}else if(this.type === 'fire'){
	  		className = 'badge-danger';
	  	}else if(this.type === 'flying'){
	  		className = 'badge-primary';
	  	}else if(this.type === 'grass'){
	  		className = 'badge-success';
	  	}

		this.el.nativeElement.className = 'badge mr-1 ' + className;
	}
}
