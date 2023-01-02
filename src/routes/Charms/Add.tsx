import { ActionFunction, Form } from "react-router-dom";
import { ex3 } from "../../ontologies/ex3";

export const action: ActionFunction = async ({ request, params }) => {};

export default function CharmAddRoute() {
  return (
    <Form>
      <label htmlFor={ex3.name.uri}>
        Name
        <input id={ex3.name.uri} />
      </label>
      <label htmlFor={ex3.moteCost.uri}>
        Mote Cost
        <input id={ex3.moteCost.uri} />
      </label>
    </Form>
  );
}
