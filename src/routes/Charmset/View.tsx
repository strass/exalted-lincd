import { Link, useParams } from "react-router-dom";
// @ts-expect-error no types for lincd-jsonld
import { JSONLD } from "lincd-jsonld/lib/utils/JSONLD";
import { useQuery } from "react-query";
import { ex3, _self as ex3Namespace } from "../../ontologies/ex3";
import { NamedNode } from "lincd/lib/models";
import { rdfs } from "lincd/lib/ontologies/rdfs";
import Ex3Charm from "../../shapes/CharmClass";
import { SearchMap } from "lincd/lib/collections/SearchMap";

const CharmsetViewRoute = () => {
  const { id } = useParams();
  const { data } = useQuery(`charmset/${id}`, async () => {
    await JSONLD.parse(
      `${window.location.protocol}//${window.location.host}/${
        process.env.NODE_ENV !== "development" ? "exalted-lincd/" : ""
      }ex3ont.owl`
    );
    const charmset = NamedNode.getOrCreate(`${ex3Namespace}${id}`);
    const charms = Ex3Charm.searchLocal(
      new SearchMap([[ex3.isInCharmset, charmset]])
    );
    return {
      charmset,
      charms,
    };
  });

  if (!data?.charmset) {
    return null;
  }

  //   if (charm.type.uri !== ex3.Charm.uri || charm.getProperties().size <= 1) {
  //     throw new Response("", { status: 404 });
  //   }

  return (
    <article>
      <h1>{data.charmset.getValue(rdfs.label)}</h1>
      <ul>
        {data.charms.map((charm) => (
          <li key={charm.node.value}>
            <Link to={`/charms/${charm.node.value.split("#")[1]}`}>
              {charm.name}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CharmsetViewRoute;
