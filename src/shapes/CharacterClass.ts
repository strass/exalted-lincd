import { Shape } from "lincd/lib/shapes/Shape";
import { Literal, Node } from "lincd/lib/models";
import { linkedShape } from "../package";
import { literalProperty } from "lincd/lib/utils/ShapeDecorators";
import { ex3 } from "../ontologies/ex3";
import invariant from "tiny-invariant";

@linkedShape
export default class Ex3Character extends Shape {
  /**
   * indicates that instances of this shape need to have this rdf.type
   */
  static targetClass = ex3.Character;

  /**
   * instances of this shape need to have exactly one value defined for the given property
   */
  @literalProperty({
    path: ex3.name,
    nodeKind: Literal,
    required: true,
    maxCount: 1,
  })
  get name() {
    const name = this.getValue(ex3.name);
    invariant(name, "Character needs to have a name");
    return name;
  }
  set name(val: string) {
    this.overwrite(ex3.name, new Literal(val) as Node);
  }
}
