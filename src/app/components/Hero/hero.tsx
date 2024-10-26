import style from "./hero.module.css";

const HeroPage = () => {
  return (
    <div>
      <h2 className={style.css}>This is a Hero Section</h2>
      <br />
      <p className={style.paragraph}>
        Mastering TypeScript, now diving into Next.js to build faster, scalable
        web applications. Learning Next.js can transform how you build web
        applications by offering a more efficient, scalable, and
        high-performance development experience. Next.js is built on top of
        React, so it extends React&apos;s capabilities by offering additional
        features that make development faster and more efficient.
      </p>
    </div>
  );
};
export default HeroPage;
