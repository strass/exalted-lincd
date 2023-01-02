import { rdfs } from "lincd/lib/ontologies/rdfs";
import React from "react";
import { Link } from "react-router-dom";
import { linkedComponent } from "../../package";
import CharmClass from "../../shapes/CharmClass";

const Charm = linkedComponent<CharmClass>(CharmClass, ({ source }) => {
  return (
    <article>
      <header>
        <h1>{source.name}</h1>
        {source.charmset.isInCharmset && (
          <Link to={source.charmset.uri}>
            {source.charmset.charmset?.getValue(rdfs.label)}
          </Link>
        )}
      </header>
      <dl style={{ display: "grid", gridTemplateColumns: "max-content auto" }}>
        <dt>Cost</dt>
        <dd>{source.moteCost}m</dd>
        <dt>Mins</dt>
        <dd>{source.requirements}</dd>
        <dt>Type</dt>
        <dd>{source.charmType}</dd>
        <dt>Keywords</dt>
        <dd>{source.charmKeywords}</dd>
        <dt>Duration</dt>
        <dd>{source.charmDuration}</dd>
        <dt>Prerequisite Charms</dt>
        <dd>{source.charmPrerequisites}</dd>
      </dl>
      <p>{source.description}</p>
    </article>
  );
});

export default Charm;
