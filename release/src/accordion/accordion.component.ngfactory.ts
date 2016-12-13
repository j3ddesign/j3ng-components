/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/accordion/accordion.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../src/accordion/accordion-panel.component';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import19 from './accordion-panel.component.ngfactory';
import * as import20 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import21 from '@angular/common/src/directives/ng_class';
export class Wrapper_AccordionComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AccordionComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.AccordionComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_panels(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.panels = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.selected.subscribe(_eventHandler.bind(view,'selected'))); }
  }
}
var renderType_AccordionComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AccordionComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.AccordionComponent>;
  _AccordionComponent_0_3:Wrapper_AccordionComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AccordionComponent_Host0,renderType_AccordionComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'j3-accordion',new import3.InlineArray4(4,'aria-multiselectable','true','role','tablist'),rootSelector,(null as any));
    this.compView_0 = new View_AccordionComponent0(this.viewUtils,this,0,this._el_0);
    this._AccordionComponent_0_3 = new Wrapper_AccordionComponent(this.renderer,new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex));
    this.compView_0.create(this._AccordionComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._AccordionComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AccordionComponent) && (0 === requestNodeIndex))) { return this._AccordionComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AccordionComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._AccordionComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AccordionComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AccordionComponentNgFactory:import8.ComponentFactory<import0.AccordionComponent> = new import8.ComponentFactory<import0.AccordionComponent>('j3-accordion',View_AccordionComponent_Host0,import0.AccordionComponent);
const styles_AccordionComponent:any[] = ['[_nghost-%COMP%] {\n      display: block;\n      overflow: hidden;\n      position: relative;\n    }'];
var renderType_AccordionComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_AccordionComponent,{});
export class View_AccordionComponent0 extends import2.AppView<import0.AccordionComponent> {
  _viewQuery_AccordionPanelComponent_0:import11.QueryList<any>;
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import12.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import13.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AccordionComponent0,renderType_AccordionComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_AccordionPanelComponent_0 = new import11.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import12.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import14.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import13.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import15.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import16.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.panels;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) { if (this._viewQuery_AccordionPanelComponent_0.dirty) {
        this._viewQuery_AccordionPanelComponent_0.reset([this._vc_1.mapNestedViews(View_AccordionComponent1,(nestedView:View_AccordionComponent1):any => {
          return [nestedView._AccordionPanelComponent_0_4.context];
      })]);
      this.context._panels = this._viewQuery_AccordionPanelComponent_0;
      this._viewQuery_AccordionPanelComponent_0.notifyOnChanges();
    } }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_AccordionComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_AccordionComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import17.AccordionPanelComponent>;
  _NgClass_0_3:import18.Wrapper_NgClass;
  _AccordionPanelComponent_0_4:import19.Wrapper_AccordionPanelComponent;
  _map_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AccordionComponent1,renderType_AccordionComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_4 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {animatable: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'j3-accordion-panel',new import3.InlineArray4(4,'class','accordion-panel','role','tabpanel'),(null as any));
    this.compView_0 = new import19.View_AccordionPanelComponent0(this.viewUtils,this,0,this._el_0);
    this._NgClass_0_3 = new import18.Wrapper_NgClass(this.parentView.injectorGet(import15.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import20.KeyValueDiffers,this.parentIndex),new import9.ElementRef(this._el_0),this.renderer);
    this._AccordionPanelComponent_0_4 = new import19.Wrapper_AccordionPanelComponent(new import9.ElementRef(this._el_0));
    this.compView_0.create(this._AccordionPanelComponent_0_4.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'expand',(null as any),'action',(null as any)),this.eventHandler(this.handleEvent_0));
    this._AccordionPanelComponent_0_4.subscribe(this,this.eventHandler(this.handleEvent_0),true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3.context; }
    if (((token === import17.AccordionPanelComponent) && (0 === requestNodeIndex))) { return this._AccordionPanelComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'accordion-panel';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_4(this.parentView.context.initialized);
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit;
    this._AccordionPanelComponent_0_4.check_panel(currVal_0_1_0,throwOnChange,false);
    const currVal_0_1_1:any = this.context.index;
    this._AccordionPanelComponent_0_4.check_index(currVal_0_1_1,throwOnChange,false);
    if (this._AccordionPanelComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._AccordionPanelComponent_0_4.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._AccordionPanelComponent_0_4.context.ngAfterViewInit(); } }
  }
  dirtyParentQueriesInternal():void {
    (<View_AccordionComponent0>this.parentView)._viewQuery_AccordionPanelComponent_0.setDirty();
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AccordionPanelComponent_0_4.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'expand')) {
      const pd_sub_0:any = ((<any>this.parentView.context.expandAccordion($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'action')) {
      const pd_sub_1:any = ((<any>this.parentView.context.navigateTo($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}