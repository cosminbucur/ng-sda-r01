import { DemoEnums } from './enums/enums';
import { DemoClasses } from './oop/classes';
import { DemoSet } from './sets';
import { DemoMap } from './maps';
import { DemoIteration } from './iteration';
import { DemoObjectDestructuring } from './object-destructuring';
import { DemoFatArrow } from './fat-arrow';
import { DemoStrings } from './strings';
import { DemoConst } from './const';
import { DemoVariables } from './variables';
import { DemoLet } from './let';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  constructor() {
    // const demoLet: DemoLet = new DemoLet();
    // demoLet.testLocalVariables();

    // const demoVariables: DemoVariables = new DemoVariables();
    // demoVariables.declareVariables();

    // const demoConst: DemoConst = new DemoConst();
    // demoConst.mutateObject();
    // demoConst.makeObjectImmutable();

    // const demoStrings: DemoStrings = new DemoStrings();
    // demoStrings.templateStrings();
    // demoStrings.variableSubstitution();

    // const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    // demoFatArrow.testFatArrow();
    // demoFatArrow.testFatArrowWithArguments();

    // const demoObjectDestructuring: DemoObjectDestructuring = new DemoObjectDestructuring();
    // demoObjectDestructuring.objectDestructuring();
    // demoObjectDestructuring.arrayDestructuring();

    // const demoIteration: DemoIteration = new DemoIteration();
    // demoIteration.testFor();
    // demoIteration.testForInObject();
    // demoIteration.testForInArray();
    // demoIteration.testForOf();

    // const demoMap: DemoMap = new DemoMap();
    // demoMap.testMap();

    // const demoSet: DemoSet = new DemoSet();
    // demoSet.testSets();

    // const demoClasses: DemoClasses = new DemoClasses();
    // demoClasses.classInstance();

    const demoEnums: DemoEnums = new DemoEnums();
    demoEnums.iterateEnum();
    demoEnums.iterateEnumKeys();
    demoEnums.getKeysOfStringEnum();
    demoEnums.getValuesOfStringEnum();
  }

  ngOnInit(): void {
  }

}
