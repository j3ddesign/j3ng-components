import { Component, ViewChild, AfterViewInit, Input, NgZone } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'j3-syntax-highlighter',
  styles: [
    `
    #label {
        color: black;
    }
    `
  ],
  template:
  `<pre>
    <span id="label" *ngIf="label">{{label}}</span>
    <code #code class="{{language ? language : ''}}">
      <ng-content></ng-content>
    </code>
  </pre>`
})
export class SyntaxHighlighterComponent implements AfterViewInit {
  @ViewChild('code') code;
  @Input()
  label: string = null;
  @Input()
  language: 'typescript' | 'scss' | 'html' | null = null;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    hljs.configure({
      tabReplace: '  ', // 2 spaces,
      languages: ['scss', 'typescript', 'html']
    });
    this.zone.runOutsideAngular(() => hljs.highlightBlock(this.code.nativeElement));
  }
}
