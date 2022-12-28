import {Shape} from 'lincd/lib/shapes/Shape';
import {Literal, NamedNode} from 'lincd/lib/models';
import {linkedShape} from '../package';
import {literalProperty} from 'lincd/lib/utils/ShapeDecorators';
import {ex3} from '../ontologies/ex3';

@linkedShape
export class ExampleShapeClass extends Shape {
  /**
   * indicates that instances of this shape need to have this rdf.type
   */
  static targetClass: NamedNode = ex3.ExampleClass;

  /**
   * instances of this shape need to have exactly one value defined for the given property
   */
  @literalProperty({
    path: ex3.exampleProperty,
    required: true,
    maxCount: 1,
  })
  get name() {
    return this.getValue(ex3.exampleProperty);
  }

  set name(val: string) {
    this.overwrite(ex3.exampleProperty, new Literal(val));
  }
}
