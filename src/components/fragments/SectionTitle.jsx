import { SectionTitleProps } from "../../proptypes";

function SectionTitle({ className, children }) {
  return (
    <section className={className}>
      <div className={className}>{children}</div>
    </section>
  );
}

SectionTitle.propTypes = SectionTitleProps

export default SectionTitle;
