import { useParams, useRouteError } from "react-router-dom";
import Charm from "../../components/Charm";
import Ex3Charm from "../../shapes/CharmClass";
// @ts-expect-error no types for lincd-jsonld
import { JSONLD } from "lincd-jsonld/lib/utils/JSONLD";
import { useQuery } from "react-query";
import { ex3, _self as ex3Namespace } from "../../ontologies/ex3";

const CharmViewRoute = () => {
  const { id } = useParams();
  const { data: charm } = useQuery(`charm/${id}`, async () => {
    await JSONLD.parse(
      `${window.location.protocol}//${window.location.host}/${
        process.env.NODE_ENV !== "development" ? "exalted-lincd/" : ""
      }ex3ont.json`
    );
    return Ex3Charm.getFromURI(`${ex3Namespace}${id}`);
  });
  if (!charm) {
    return null;
  }

  if (charm.type.uri !== ex3.Charm.uri || charm.getProperties().size <= 1) {
    throw new Response("", { status: 404 });
  }

  return <Charm of={charm} />;
};

export default CharmViewRoute;

export const CharmViewError = () => {
  const t = useRouteError();
  if (t instanceof Response) {
    return <>{t.status}</>;
  }
  throw t;
};
