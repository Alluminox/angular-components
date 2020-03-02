import { Component, Input, ElementRef, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

declare const $: any;

@Component({
    selector: "g-modal",
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements 
OnInit, OnDestroy, OnChanges {

    @Input()
    title: string;

    constructor(private element: ElementRef) {}

    ngOnInit() {
       const nativeElement: HTMLElement = this.nativeElement
       nativeElement.querySelector("[modal-title]").classList.add('modal-title');
       nativeElement.querySelector("[modal-body]").classList.add('modal-body');
       nativeElement.querySelector("[modal-footer]").classList.add('modal-footer');
    }

    ngOnDestroy(): void {
        console.log("Destroying component....")
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("Changes component....")
    }

    toggle() {
        $(this.modalElement).modal('toggle');
    }

    protected get nativeElement(): HTMLElement {
        return this.element.nativeElement;
    }

    protected get modalElement(): HTMLElement {
        const el: HTMLElement = this.nativeElement;
        return el.firstChild as HTMLElement;
    }

}