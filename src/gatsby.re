[@bs.module "gatsby-link"]
external gatsbyLinkClass : ReasonReact.reactClass = "default";

module Link = {
  let make = (~to_: string, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=gatsbyLinkClass,
      ~props={"to": to_},
      children
    );
};
