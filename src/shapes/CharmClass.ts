import { Shape } from "lincd/lib/shapes/Shape";
import { Literal, Node } from "lincd/lib/models";
import { linkedShape } from "../package";
import { literalProperty } from "lincd/lib/utils/ShapeDecorators";
import { rdfs } from "lincd/lib/ontologies/rdfs";
import { ex3 } from "../ontologies/ex3";
import invariant from "tiny-invariant";

@linkedShape
export default class Ex3Charm extends Shape {
  /**
   * indicates that instances of this shape need to have this rdf.type
   */
  static targetClass = ex3.Charm;

  @literalProperty({
    path: rdfs.label,
    nodeKind: Literal,
    required: true,
    defaultValue: "Unnamed Charm",
    maxCount: 1,
  })
  get name() {
    const name = this.getValue(rdfs.label);
    invariant(name, "Charm needs to have a name");
    return name;
  }
  set name(val: string) {
    this.overwrite(rdfs.label, new Literal(val) as Node);
  }

  @literalProperty({
    path: ex3.moteCost,
    required: false,
    description: "How many motes a charmlike costs",
  })
  get moteCost() {
    const name = this.getValue(ex3.moteCost);
    return name as string;
  }
  set moteCost(val: string) {
    this.overwrite(ex3.moteCost, new Literal(val) as Node);
  }

  @literalProperty({
    path: ex3.description,
    required: false,
  })
  get description() {
    const name = this.getValue(ex3.description);
    return name as string;
  }
  set description(val: string) {
    this.overwrite(ex3.description, new Literal(val) as Node);
  }

  @literalProperty({
    path: ex3.charmType,
    required: false,
  })
  get charmType() {
    const name = this.getValue(ex3.charmType);
    return name as string;
  }
  set charmType(val: string) {
    this.overwrite(ex3.charmType, new Literal(val) as Node);
  }

  @literalProperty({
    path: ex3.charmKeyword,
    required: false,
    defaultValue: "None",
  })
  get charmKeywords() {
    const name = this.getValue(ex3.charmKeyword) ?? "None";
    return name as string;
  }
  // set charmType(val: string) {
  //   this.overwrite(ex3.charmType, new Literal(val) as Node);
  // }

  @literalProperty({
    path: ex3.charmDuration,
    required: false,
    defaultValue: "None",
  })
  get charmDuration() {
    const name = this.getValue(ex3.charmDuration);
    return name as string;
  }
  // set charmType(val: string) {
  //   this.overwrite(ex3.charmType, new Literal(val) as Node);
  // }

  @literalProperty({
    path: ex3.charmPrerequisite,
    required: false,
    defaultValue: "None",
  })
  get charmPrerequisites() {
    const name = this.getValue(ex3.charmPrerequisite) ?? "None";
    return name as string;
  }
  // set charmType(val: string) {
  //   this.overwrite(ex3.charmType, new Literal(val) as Node);
  // }

  // TODO: is there a way to have multiple different types of nodes?
  // e.g. just a string "Essence 1, Athletics 2" or a node with a specific shape (ex3:EssenceRequirement)
  @literalProperty({
    path: ex3.requirements,
    required: false,
  })
  get requirements() {
    const name = this.getValue(ex3.requirements);
    return name as string;
  }
  set requirements(val: string) {
    this.overwrite(ex3.requirements, new Literal(val) as Node);
  }
}
