import React from "react";
import { linkedComponent } from "../../package";
import CharmClass from "../../shapes/CharmClass";

const Charm = linkedComponent<CharmClass>(
  CharmClass,
  ({ source, linkedData }) => {
    return (
      <article>
        <h1>{source.name}</h1>
        <dl>
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
  }
);

export default Charm;
