import Title from 'components/Title/Title';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <Title text={title} />}
      {children}
    </section>
  );
};

export default Section;
