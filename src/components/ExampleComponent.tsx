import React from "react";
import {ExampleShapeClass} from "../shapes/ExampleShapeClass";
import {linkedComponentClass,linkedComponent} from '../package';
import {LinkedComponentClass} from 'lincd/lib/utils/LinkedComponentClass';

export const ExampleComponent = linkedComponent<ExampleShapeClass>(ExampleShapeClass, ({source, sourceShape}) => {
  //note that typescript knows that person has the type of the Shape you provided
  return <div></div>;
});

//alternatively, use a Class component if you prefer:
/*@linkedComponentClass(ExampleShapeClass)
export class ExampleComponent extends LinkedComponentClass<ExampleShapeClass> {
  render() {
    let exampleInstance = this.sourceShape;

    //get the name of this item from the graph
    return <h1>Hello {exampleInstance.name}!</h1>;
  }
}*/
