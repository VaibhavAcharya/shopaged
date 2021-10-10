import Wrapper from "../components/layout/Wrapper";
import { Paragraph, H1, H2, H3, H4, H5, H6 } from "../components/ui/Typography";

export default function Landing() {
  return (
    <Wrapper>
      <div className="flex col items-start justify-start gap-small">
        <H1>Heading</H1>
        <H2>Heading</H2>
        <H3>Heading</H3>
        <H4>Heading</H4>
        <H5>Heading</H5>
        <H6>Heading</H6>
        <Paragraph>
          There comes a time on a project when it’s worth investing in tooling
          to protect the codebase. I’m not sure how to articulate when, but it’s
          somewhere after the project has proven to be something long-term and
          rough edges are starting to show, and before things feel like a
          complete mess. Avoid premature optimization but avoid, uh, postmature
          optimization.
        </Paragraph>
        <Paragraph noLineHeight="true">
          There comes a time on a project when it’s worth investing in tooling
          to protect the codebase. I’m not sure how to articulate when, but it’s
          somewhere after the project has proven to be something long-term and
          rough edges are starting to show, and before things feel like a
          complete mess. Avoid premature optimization but avoid, uh, postmature
          optimization.
        </Paragraph>
        <hr />
        <Paragraph>
          There comes a time on a project when it’s worth investing in tooling
          to protect the codebase. I’m not sure how to articulate when, but it’s
          somewhere after the project has proven to be something long-term and
          rough edges are starting to show, and before things feel like a
          complete mess. Avoid premature optimization but avoid, uh, postmature
          optimization.
        </Paragraph>
        <Paragraph>
          There comes a time on a project when it’s worth investing in tooling
          to protect the codebase. I’m not sure how to articulate when, but it’s
          somewhere after the project has proven to be something long-term and
          rough edges are starting to show, and before things feel like a
          complete mess. Avoid premature optimization but avoid, uh, postmature
          optimization.
        </Paragraph>
      </div>
    </Wrapper>
  );
}
