import { NamedNode } from "lincd/lib/models";
// @ts-expect-error no types for lincd-jsonld
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
export var ns = createNameSpace("http://www.szoreny.essence.ooo/ontology#");

/**
 * The NamedNode of the ontology itself
 */
export var _self: NamedNode = ns("");

//A list of all the entities (Classes & Properties) of this ontology, each exported as a NamedNode
export var Character: NamedNode = ns("Character");
export var Charm: NamedNode = ns("E3Charm");

/** @deprecated TODO: switch to rdfs.label */
export var name: NamedNode = ns("characterName");

/** How many motes a charmlike costs */
export const moteCost = ns("mote_cost");

/** TODO: rename mins */
export const requirements = ns("requirements");

export const description = ns("description");
export const charmType = ns("charm_type");
export const charmKeyword = ns("charm_keyword");
export const charmDuration = ns("charm_duration");
export const charmPrerequisite = ns("charm_prerequisite");

//An extra grouping object so all the entities can be accessed from the prefix/name
export const ex3 = {
  Character,
  Charm,
  name,
  moteCost,
  requirements,
  description,
  charmType,
  charmKeyword,
  charmDuration,
  charmPrerequisite,
};

//Registers this ontology to LINCD.JS, so that data loading can be automated amongst other things
linkedOntology(_this, ns, "ex3", loadData, "../data/ex3.json");
