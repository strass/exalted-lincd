import { NamedNode } from "lincd/lib/models";
import { JSONLD } from "lincd-jsonld/lib/utils/JSONLD";
import { createNameSpace } from "lincd/lib/utils/NameSpace";
import { linkedOntology } from "../package";
//import all the exports of this file as one variable called _this (we need this at the end)
import * as _this from "./ex3";

/**
 * Load the data of this ontology into memory, thus adding the properties of the entities of this ontology to the local graph.
 */
export var loadData = () => {
  return import("../data/ex3.json").then((data) => JSONLD.parse(data));
};

/**
 * The namespace of this ontology, which can be used to create NamedNodes with URI's not listed in this file
 */
export var ns = createNameSpace("https://rdf.essence.ooo");

/**
 * The NamedNode of the ontology itself
 */
export var _self: NamedNode = ns("");

//A list of all the entities (Classes & Properties) of this ontology, each exported as a NamedNode
export var ExampleClass: NamedNode = ns("ExampleClass");
export var exampleProperty: NamedNode = ns("exampleProperty");

//An extra grouping object so all the entities can be accessed from the prefix/name
export const ex3 = {
  ExampleClass,
  exampleProperty,
};

//Registers this ontology to LINCD.JS, so that data loading can be automated amongst other things
linkedOntology(_this, ns, "ex3", loadData, "../data/ex3.json");
