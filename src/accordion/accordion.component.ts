import {
  Component, Input, Renderer, ElementRef, QueryList,
  ViewChildren, AfterViewInit, Output, EventEmitter, NgZone
} from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';

@Component({
  selector: 'j3-accordion',
  template: `
    <j3-accordion-panel
      class="accordion-panel"
      [ngClass]="{animatable: initialized}"
      *ngFor="let panel of panels; let i = index;"
      [panel]="panel"
      [index]="i"
      (expand)="expandAccordion($event)"
      (action)="navigateTo($event)"
      role="tabpanel"
    ></j3-accordion-panel>
  `,
  styles: [
    `:host {
      display: block;
      overflow: hidden;
      position: relative;
    }
`
  ],
  host: {
    role: 'tablist',
    'aria-multiselectable': 'true'
  }
})
export class AccordionComponent implements AfterViewInit {
  @Input()
  panels: AccordionPanel[] = [];

  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  initialized: boolean = false;

  @ViewChildren(AccordionPanelComponent)
  panelElements: QueryList<AccordionPanelComponent>;

  headerSize: number;
  availableHeight: number;

  constructor(
    private renderer: Renderer,
    private el: ElementRef,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
    this.calculateGeometries();
    this.movePanels();
  }

  protected expandAccordion(expandedIndex: number) {
    if (this.panelElements && this.panelElements.length === 0) return;

    this.panelElements.forEach(panel => {
      panel.expanded = false;
    });

    this.panelElements.toArray()[expandedIndex].expanded = true;
    this.movePanels();
  }

  protected navigateTo(event) {
    this.selected.emit(event);
  }

  private calculateGeometries() {
    if (this.panelElements && this.panelElements.length === 0) return;

    this.headerSize = this.panelElements.first.headerHeight;
    this.availableHeight = this.el.nativeElement.offsetHeight - (this.panelElements.length * this.headerSize);
  }

  private movePanels() {
    if (this.panels && this.panels.length === 0) return;

    let baseY = 0;
    this.panelElements.forEach((panel, index) => {
      this.zone.runOutsideAngular(() => {
        requestAnimationFrame(() => {

          // Set the transform position of the element to correct position
          this.renderer
            .setElementStyle(panel.el.nativeElement, 'transform',
              `translateY(${baseY + (this.headerSize * index)}px)`);

          this.renderer
            .setElementStyle(panel.content.nativeElement, 'height', `${this.availableHeight}px`);

          if (panel.expanded) baseY = this.availableHeight;

          // panels are in place - we can enable animations
          if (!this.initialized && index === this.panelElements.length - 1) this.initialized = true;
        });
      });
    });
  }
}

export interface AccordionPanel {
  name: string;
  items: string[];
  icon?: string;
}
